import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { load } from 'cheerio';

const run = promisify(execFile);
const origin = 'https://intalelevators.com';
const clean = value => value.replace(/\s+/g, ' ').trim();
const media = new Map();
function localImage(source) {
  const url = new URL(source, origin);
  if (url.origin !== origin || !url.pathname.startsWith('/wp-content/uploads/')) return null;
  const local = url.pathname.replace('/wp-content/uploads/', '/images/source/');
  media.set(url.href, local);
  return local;
}
async function fetchText(url) {
  return (await run('curl', ['-fsSL', '--retry', '2', '--max-time', '60', url], { maxBuffer: 12_000_000 })).stdout;
}
function extract($, root) {
  const blocks = [];
  let buffer = '';
  function flush(type = 'text') {
    const text = clean(buffer);
    if (text) blocks.push({ type, text });
    buffer = '';
  }
  function visit(node) {
    if (node.type === 'text') { buffer += node.data; return; }
    if (node.type !== 'tag') return;
    const el = $(node);
    const tag = node.name;
    if (['style','script','noscript','svg','button'].includes(tag)) return;
    if (tag === 'br') { buffer += ' '; return; }
    if (tag === 'img') {
      flush();
      const src = localImage(el.attr('src'));
      if (src) blocks.push({ type: 'image', src, alt: el.attr('alt') || '' });
      return;
    }
    if (tag === 'iframe') {
      flush();
      const src = el.attr('src');
      if (src?.startsWith('https://www.google.com/maps/embed')) blocks.push({ type: 'map', src });
      return;
    }
    if (tag === 'form') {
      flush();
      const fields = el.find('input[placeholder],textarea[placeholder]').toArray().map(input => ({
        label: input.attribs.placeholder, name: input.attribs.name,
        type: input.attribs.type === 'number' ? 'tel' : input.attribs.type || 'text',
        required: input.attribs['aria-required'] === 'true',
      }));
      if (fields.length) blocks.push({ type: 'form', fields, submit: el.find('[type=submit]').attr('value') });
      return;
    }
    const heading = /^h[1-6]$/.test(tag) || (tag === 'p' && el.children('strong').length && clean(el.children('strong').text()) === clean(el.text()));
    const boundary = heading || ['p','div','li','section','blockquote'].includes(tag);
    if (boundary) flush();
    for (const child of node.children || []) visit(child);
    if (boundary) flush(heading ? 'heading' : 'text');
  }
  visit(root);
  flush();
  return blocks;
}
const sitemap = load(await fetchText(origin + '/wp-sitemap.xml'), { xmlMode: true });
const pages = {};
let shared;
for (const index of sitemap('loc').toArray().map(el => sitemap(el).text()).filter(url => url.includes('/wp-sitemap-posts-'))) {
  const list = load(await fetchText(index), { xmlMode: true });
  for (const loc of list('loc').toArray()) {
    const url = list(loc).text();
    const $ = load(await fetchText(url));
    const slug = new URL(url).pathname.replace(/^\/|\/$/g, '') || 'home';
    const root = $('.entry-content').first();
    if (!root.length) throw Error('Missing page body: ' + url);
    const panels = root.find('.so-panel').filter((_, el) => !$(el).find('.so-panel').length);
    const groups = (panels.length ? panels : root).toArray().map(el => extract($, el)).filter(group => group.length);
    pages[slug] = { url, title: clean($('title').text()), groups };
    if (slug === 'home') {
      shared = {
        name: clean($('.site-description').first().text()),
        navigation: $('nav').first().find('a').toArray().map(link => ({ label: clean($(link).text()), href: new URL(link.attribs.href, origin).pathname })),
        details: $('header p').toArray().map(el => clean($(el).text())).filter(Boolean),
        enquiry: clean($('form h1,form h2,form h3,form h4').first().text()),
        copyright: clean($('.footer-copyright').text()),
        logo: localImage($('header img').first().attr('src') || $('img').first().attr('src')),
        footer: $('.so-panel').filter((_, el) => !$(el).parents('main').length && !$(el).find('.so-panel').length)
          .toArray().map(el => extract($, el)).filter(group => group.length),
        attribution: clean($('.powered-by-wordpress').text()) || clean($('footer a[href*="butterflythemes"]').text()),
      };
    }
  }
}
const library = [];
for (let page = 1; ; page++) {
  const items = JSON.parse(await fetchText(origin + '/wp-json/wp/v2/media?per_page=100&page=' + page + '&_fields=id,source_url,alt_text,mime_type'));
  for (const item of items) {
    if (item.mime_type.startsWith('image/')) library.push({ id: item.id, source: item.source_url, src: localImage(item.source_url), alt: item.alt_text });
  }
  if (items.length < 100) break;
}
const entries = [...media];
for (let i = 0; i < entries.length; i += 5) {
  await Promise.all(entries.slice(i,i+5).map(async ([url, local]) => {
    const file = path.join('public', local);
    await fs.mkdir(path.dirname(file), { recursive: true });
    const { stdout } = await run('curl', ['-fsSL','--retry','2','--max-time','60',url], { encoding: 'buffer', maxBuffer: 30_000_000 });
    await fs.writeFile(file, stdout);
  }));
}
shared.email = shared.footer.flat().map(block => block.text).find(text => /^[^\s@]+@[^\s@]+$/.test(text));
shared.phone = shared.details.find(text => /^\+/.test(text));
shared.tagline = pages['about-us'].groups.flat().filter(block => block.type === 'heading' && block.text.length > 24)[0]?.text;
shared.hero = pages.home.groups[0][0].src;
await fs.writeFile('src/data/company.json', JSON.stringify(shared, null, 2) + '\n');
await fs.writeFile('src/data/source.json', JSON.stringify({ pages, library }, null, 2) + '\n');
console.log(Object.keys(pages).length + ' pages and posts, ' + media.size + ' unique image files');

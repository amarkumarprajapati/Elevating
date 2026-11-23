import source from '../data/source.json';

export function contentProps(slug) {
  return { props: { page: source.pages[slug], slug } };
}

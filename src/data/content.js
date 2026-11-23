import { pages } from './data.js';

export function contentProps(slug) {
  return { props: { page: pages[slug], slug } };
}

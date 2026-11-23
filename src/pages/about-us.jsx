import SourcePage from '../components/SourcePage';
import { contentProps } from '../data/content';

export default SourcePage;

export function getStaticProps() {
  return contentProps('about-us');
}

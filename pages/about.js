import PageLayout from '../components/PageLayout';
import { loadPage } from '../lib/loadPage';

const About = ({ globalData, frontMatter, source }) => (
  <PageLayout
    globalData={globalData}
    frontMatter={frontMatter}
    source={source}
  />
);
export default About;

export async function getStaticProps() {
  const res = await loadPage('about');
  const { globalData, mdxSource, data } = res;
  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
    },
  };
}

import { MDXRemote } from 'next-mdx-remote';
import Header from './Header';
import Layout, { GradientBackground } from './Layout';
import SEO from './SEO';
import CustomLink from './CustomLink';
import Head from 'next/head';
import Footer from './Footer';

const components = {
  a: CustomLink,
  Head,
};

export default function PageLayout({ source, frontMatter, globalData }) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      <Header />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {frontMatter.title}
          </h1>
        </header>
        <main>
          <article className="prose dark:prose-dark">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';
import '../styles/globals.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ResumeSection />
        {/* 他のセクションをここに追加 */}
      </Layout>
    </>
  );
};

export default Home;
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';
import '../styles/globals.css';
// import Card from '@/components/Card';
import Hero from '@/components/Hero';

const Home: NextPage = () => {
  return (
      <Hero />

      // {/* <Layout>
      //   <ResumeSection />
      //   {/* 他のセクションをここに追加 */}
      // </Layout> */
  );
};

export default Home;
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';
import Top from '@/components/Top';

const TopPage: NextPage = () => {
  return (
    <div>
      <Top />
    </div>
  );
};

export default TopPage;
import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ResumeSection from '../components/ResumeSection';
import '../styles/globals.css';
// import Card from '@/components/Card';
import Top from '@/components/Top';

const TopPage: NextPage = () => {
  return (
      <Top />
  );
};

export default TopPage;
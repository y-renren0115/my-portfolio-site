import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

const About: React.FC = () => {
  return (
    <>
    <div className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="mb-8">SNSでもお問い合わせ頂けます</p>

      <div className="flex justify-center gap-4 mb-8">
        {/* SNSアイコンをImageコンポーネントで読み込む */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/facebook.png" alt="Facebook" width={50} height={50} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/twitter.png" alt="Twitter" width={50} height={50} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/icons/instagram.png" alt="Instagram" width={50} height={50} />
        </a>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" id="name" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
          <input type="text" id="subject" className="mt-1 p-2 w-full border rounded" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" className="mt-1 p-2 w-full border rounded" rows={4}></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  </>
  );
};

export default About;

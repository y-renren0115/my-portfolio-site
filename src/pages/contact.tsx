import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
        <p className="text-center mb-8">If you have any questions, feel free to reach out to me.</p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 p-2 w-full border rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
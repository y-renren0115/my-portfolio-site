import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const cardsData = [
    {
      title: 'Card Title 1',
      description: 'This is the card description.'
    },
    {
      title: 'Card Title 2',
      description: 'This is another card description.'
    },
    {
      title: 'Card Title 3',
      description: 'Yet another card description.'
    }
  ];
  

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* ロゴ部分 */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <span className="font-bold text-xl ml-2">My Portfolio</span>
          </div>

          {/* ナビゲーションリンク */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" passHref>
                  <span className="hover:underline cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/works" passHref>
                  <span className="hover:underline cursor-pointer">Works</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="hover:underline cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Layout;
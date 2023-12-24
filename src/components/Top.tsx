import Card from '../components/Card';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

const Top = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1"></div>
      <div className="flex flex-col justify-center items-start col-span-1 pl-14">
        <div className="text-4xl font-alice font-bold my-12">
          Welcome to My Portfolio Site!
        </div>
        <nav className="space-y-2 font-alice">
          <div className="flex items-center mb-8">
            <span className="text-xl ml-2 text-left">Discover More About Me → </span>
            <Link href="/about">
              <Button variant="contained" color="primary" className="font-bold px-2 pt-4 mb-2 bg-white text-gray-800 rounded hover:bg-gray-100 cursor-pointer shadow">
                About
              </Button>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="text-xl ml-2 pt-4 mb-8 text-left">Discover My Past Projects → </span>
            <Link href="/works">
              <Button variant="contained" color="primary" className="font-bold px-2 mb-4 bg-white text-gray-800 rounded hover:bg-gray-100 cursor-pointer shadow">
                Works
              </Button>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="text-xl ml-2 pt-4 mb-8 text-left">Contact Me for Details Here → </span>
            <Link href="/contact">
              <Button variant="contained" color="primary" className="font-bold px-2 mb-4 bg-white text-gray-800 rounded hover:bg-gray-100 cursor-pointer shadow">
                Contact
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div >
  );
}

export default Top;
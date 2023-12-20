import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  return (
    <header className="flex items-center bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <DescriptionIcon width={50} height={50} />
          <span className="font-bold text-xl ml-2">My Portfolio</span>
        </div>
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
  );
}

export default Navbar;

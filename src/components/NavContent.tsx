import Link from 'next/link';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Logo } from './Logo';

const NavContent = () => (
  <div className="navbar md:flex justify-center md:justify-between items-center md:text-2xl text-3xl text-gray-500 md:space-y-0 space-y-10 opacity-100">
    <div className="flex justify-center md:justify-between">
      <Link href="/" passHref={true}>
        <a>
          <Logo />
        </a>
      </Link>
    </div>
    <ul className="navbar md:flex justify-between items-center lg:space-x-12 md:space-x-6 md:space-y-0 space-y-5 text-center">
      <li>
        <Link href="#gallery">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            Gallery
          </a>
        </Link>
      </li>
      <li>
        <Link href="#faq">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            FAQ
          </a>
        </Link>
      </li>
      <li>
        <Link href="#roadmap">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            Roadmap
          </a>
        </Link>
      </li>
      <li>
        <Link href="#team">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            Team
          </a>
        </Link>
      </li>
    </ul>
    <ul className="navbar md:flex justify-between items-center md:space-x-5 md:space-y-0 space-y-5">
      <li className="flex justify-center">
        <Link href="#">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            <FaDiscord />
          </a>
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="#">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            <FaInstagram />
          </a>
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="#">
          <a className="font-title hover:text-red-800 transition duration-300 ease-in-out">
            <FaTwitter />
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export { NavContent };

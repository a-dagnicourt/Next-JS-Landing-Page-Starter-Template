import Link from 'next/link';

import { Logo } from '../components/Logo';

const Navbar = () => (
  <div className="w-screen mx-auto p-3 fixed top-0 z-50 bg-gray-900/75 drop-shadow">
    <nav className="max-w-screen-lg mx-auto">
      <ul className="navbar flex justify-between items-center space-x-5 font-medium text-xl text-gray-500  opacity-100">
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
        <Link href="/" passHref={true}>
          <a>
            <Logo />
          </a>
        </Link>
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
    </nav>
  </div>
);

export { Navbar };

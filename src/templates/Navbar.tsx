import Link from 'next/link';

import { Logo } from './Logo';

const Navbar = () => (
  <div className="w-screen mx-auto px-3 py-6 fixed top-0 z-50">
    <nav className="max-w-screen-lg mx-auto">
      <ul className="navbar flex justify-between items-center font-medium text-xl text-gray-800">
        <li>
          <Link href="#gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="#faq">
            <a>FAQ</a>
          </Link>
        </li>
        <Logo xl />
        <li>
          <Link href="#roadmap">
            <a>Roadmap</a>
          </Link>
        </li>
        <li>
          <Link href="#team">
            <a>Team</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { Navbar };

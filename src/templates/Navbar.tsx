import { slide as Menu } from 'react-burger-menu';
import { MdClear } from 'react-icons/md';

import { NavContent } from '../components/NavContent';

const MobileNavbar = () => (
  <div className="block md:hidden">
    <Menu
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
      customCrossIcon={<MdClear className="text-red-800" />}
      width={240}
      right
    >
      <NavContent />
    </Menu>
  </div>
);

const Navbar = () => (
  <div className="w-screen mx-auto p-3 fixed top-0 z-50 bg-gray-900/75 shadow-xl hidden md:block">
    <nav className="max-w-screen-lg mx-auto">
      <NavContent />
    </nav>
  </div>
);

export { MobileNavbar, Navbar };

import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <Section yPadding="py-6" sticky>
    <NavbarTwoColumns>
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
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };

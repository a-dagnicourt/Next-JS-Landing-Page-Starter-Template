import { ReactNode } from 'react';

type INavbarProps = {
  logo?: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <nav>
    <ul className="w-full navbar flex justify-between items-center font-medium text-xl text-gray-800">
      {props.children}
    </ul>
  </nav>
);

export { NavbarTwoColumns };

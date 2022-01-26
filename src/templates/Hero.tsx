import Link from 'next/link';

import { Button } from '../button/Button';

const Hero = () => (
  <header className="h-screen flex flex-col justify-center items-center bg-gray-100 mx-auto px-3 py-6 text-center ">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      Lorem
    </h1>
    <div className="text-2xl mt-4 mb-16">Ipsum</div>

    <Link href="https://creativedesignsguru.com/category/nextjs/">
      <a>
        <Button xl>Download Your Free Theme</Button>
      </a>
    </Link>
  </header>
);

export { Hero };

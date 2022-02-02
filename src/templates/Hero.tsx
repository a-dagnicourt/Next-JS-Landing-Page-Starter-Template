import Link from 'next/link';
import { HiChevronDoubleDown } from 'react-icons/hi';

import { Fog } from '../components/Fog';
import { AppConfig } from '../utils/AppConfig';

const Hero = () => (
  <header className="h-screen relative bg-hero-pattern bg-center bg-cover">
    <Fog />
    <div className="absolute bg-black/75 w-full h-full animate-pulse-slow" />
    <div className="absolute w-full h-full flex flex-col justify-around items-center mx-auto px-3 py-6 text-center">
      <div>
        <h1 className="text-4xl md:text-6xl text-red-900 font-bold whitespace-pre-line leading-hero font-title">
          {AppConfig.site_name}
        </h1>
        <p className="text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <Link href="#gallery">
        <a>
          <HiChevronDoubleDown className="text-5xl text-gray-400 bg-red-900 rounded-full p-2 hover:bg-red-800 hover:text-gray-300 hover:translate-y-2 transition" />
        </a>
      </Link>
    </div>
  </header>
);

export { Hero };

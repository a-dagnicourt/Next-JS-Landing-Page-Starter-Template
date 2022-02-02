import { Divider } from '../components/Divider';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Hero } from './Hero';
import { MobileNavbar, Navbar } from './Navbar';
import { Roadmap } from './Roadmap';
import { Team } from './Team';

const Base = () => (
  <div className="antialiased text-gray-600">
    <MobileNavbar />
    <div id="page-wrap">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Navbar />
      <Divider bgColor="bg-red-900" />
      <Gallery />
      <Divider bgColor="bg-red-800" />
      <Faq />
      <Divider bgColor="bg-red-700" />
      <Roadmap />
      <Divider bgColor="bg-red-800" />
      <Team />
      <Divider bgColor="bg-red-900" />
      <Footer />
    </div>
  </div>
);

export { Base };

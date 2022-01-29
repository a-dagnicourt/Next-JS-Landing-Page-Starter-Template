import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Roadmap } from './Roadmap';
import { Team } from './Team';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Navbar />
    <Gallery />
    <Faq />
    <Roadmap />
    <Team />
    <Footer />
  </div>
);

export { Base };

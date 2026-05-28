import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { Gallery } from './components/Gallery';
import { Videos } from './components/Videos';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Gallery /> 
      <Videos />  
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

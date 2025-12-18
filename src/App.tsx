// import Home from './Page/Home';
// import About from './Page/About';
// import Skills from './Page/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ContactUs from './Page/Contact';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';

const Home = lazy(() => import('./Page/Home'));
const About = lazy(() => import('./Page/About'));
const Skills = lazy(() => import('./Page/Skills'));
const ContactUs = lazy(() => import('./Page/Contact'));

export default function App() {

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white}`}>
      <Navbar />
      <main>
        <Suspense fallback={<Loader />} >
          <Home />
        </Suspense>
        <Suspense fallback={<Loader />} >
          <About />
        </Suspense>
        <Suspense fallback={<Loader />} >
          <Skills />
        </Suspense>
        <Suspense fallback={<Loader />} >
          <ContactUs />
        </Suspense>
        <Footer />
      </main>
    </div >
  );
}

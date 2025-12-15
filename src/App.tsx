import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-950 to-blue-950 text-white}`}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

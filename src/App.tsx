import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

export default function App() {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    // apply class on root element for light/dark css tweaks (we used :root.light in index.css)
    if (theme === 'light') {
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
    }
  }, [theme])

  return (
    <div className={`min-h-screen bg-gradient-to-br  ${theme === 'dark' ? "from-gray-950 to-blue-950 text-white" : "from-slate-50 to-slate-100 text-black"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Home />
        <About />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

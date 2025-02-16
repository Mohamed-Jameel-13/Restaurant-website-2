import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reservations } from './components/Reservations';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useDarkMode } from './lib/utils';

function App() {
  const isDark = useDarkMode();

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-accent dark:bg-black">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="menu" className="py-20">
          <Menu />
        </section>
        <section id="reservations" className="py-20">
          <Reservations />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
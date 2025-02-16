import React from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  const menuItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Reservations', href: '#reservations', id: 'reservations' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-transparent backdrop-blur-sm py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-playfair text-white hover:text-orange-500 transition-colors">
            Spice Symphony
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "nav-link",
                  activeSection === item.id && "text-orange-500 after:w-full"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/90 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 bg-slate-950/98 backdrop-blur-sm transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "text-2xl nav-link",
                activeSection === item.id && "text-orange-500 after:w-full"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
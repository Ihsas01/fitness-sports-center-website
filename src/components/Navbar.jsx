import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-fitness-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-fitness-white tracking-tighter">
              FITNESS <span className="text-fitness-gold">SPORTS</span> CENTER
            </h1>
            <p className="text-xs text-fitness-gray-400 -mt-1">Est. 20XX</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-fitness-white hover:text-fitness-gold transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('pricing')}
                className="bg-fitness-gold hover:bg-yellow-600 text-fitness-black font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-fitness-white hover:text-fitness-gold transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-fitness-black/98 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-fitness-white hover:text-fitness-gold hover:bg-fitness-dark/50 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-fitness-gold hover:bg-yellow-600 text-fitness-black font-bold py-3 px-6 rounded-lg mt-4 transition-all duration-300"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

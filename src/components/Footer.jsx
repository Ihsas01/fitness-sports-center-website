import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-fitness-dark to-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black tracking-tighter mb-4">
              FITNESS <span className="text-fitness-gold">SPORTS</span> CENTER
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Established in 2023, we're committed to transforming lives through fitness. 
              Join our community and start your transformation journey today.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-fitness-gold/20 hover:bg-fitness-gold text-fitness-gold hover:text-fitness-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-fitness-gold transition-colors duration-300 inline-block transform hover:translate-x-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-fitness-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Colombo<br />Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-fitness-gold flex-shrink-0" />
                <a href="tel:+94763913526" className="text-gray-400 hover:text-fitness-gold transition-colors">
                  076 391 3526
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-fitness-gold flex-shrink-0" />
                <a href="mailto:Mohamedihsa001@gmail.com" className="text-gray-400 hover:text-fitness-gold transition-colors">
                  Mohamedihsa001@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers, fitness tips, and gym updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-fitness-gold transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-fitness-gold hover:bg-yellow-600 text-fitness-black font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Fitness Sports Center. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-fitness-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-fitness-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-fitness-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

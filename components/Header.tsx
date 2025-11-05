
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#fasilitas", label: "Fasilitas" },
    { href: "#galeri", label: "Galeri" },
    { href: "#kontak", label: "Kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-dark' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold">Kost n Kontrakan Rozak</a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium ${isScrolled ? 'hover:text-primary' : 'hover:text-gray-200'} transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button can be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;

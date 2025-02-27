import React, { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/Logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary">
      <nav className="container mx-auto px-8" aria-label="Main Navigation">
        {/* Grid för header */}
        <div className="grid grid-cols-[1fr_auto_1fr] max-lg:grid-cols-2 items-center font-bold uppercase">
          {/* Vänstra navigeringslänkar (visas endast på större skärmar) */}
          <div className="flex justify-end gap-4 max-lg:hidden">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="index.html">Team</a>
          </div>

          {/* Logotyp i mitten */}
          <div className="flex justify-center">
            <a href="index.html">
              <img className="w-fit h-[120px] object-cover" src={Logo} alt="Company Logo" />
            </a>
          </div>

          {/* Högra navigeringslänkar (visas endast på större skärmar) */}
          <div className="flex justify-start gap-4 max-lg:hidden">
            <a href="index.html">Services</a>
            <a href="index.html">Contact</a>
            <a href="index.html">Book now</a>
          </div>

          {/* Hamburgarikon för mindre skärmar */}
          <div className="lg:hidden flex justify-end">
            <Hamburger
              toggled={isMenuOpen}
              toggle={toggleMenu}
              size={24}
              color="#FFFFFF" // Vit färg på ikonen
            />
          </div>
        </div>

        {/* Dropdown-meny för mindre skärmar */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[120px] right-0 w-full bg-primary z-50">
            <div className="p-8">
              <ul className="space-y-4">
                <li><a href="/" className="block text-white hover:text-gray-400" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" className="block text-white hover:text-gray-400" onClick={toggleMenu}>About</a></li>
                <li><a href="index.html" className="block text-white hover:text-gray-400" onClick={toggleMenu}>Team</a></li>
                <li><a href="index.html" className="block text-white hover:text-gray-400" onClick={toggleMenu}>Services</a></li>
                <li><a href="index.html" className="block text-white hover:text-gray-400" onClick={toggleMenu}>Contact</a></li>
                <li><a href="index.html" className="block text-white hover:text-gray-400" onClick={toggleMenu}>Book now</a></li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
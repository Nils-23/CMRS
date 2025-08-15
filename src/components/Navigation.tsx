'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Operations', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="CMRS Logo"
                width={40}
                height={40}
                className="h-8 w-8 md:h-15 md:w-15 object-contain"
              />
              <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">CMRS</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-[#EDE3D6]/50 hover:shadow-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-[#EDE3D6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C27C2C] transition-all duration-200 hover:scale-105"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-3 pb-4 space-y-1 bg-white/95 backdrop-blur shadow-lg border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 hover:bg-[#EDE3D6]/50 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
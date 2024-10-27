'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative bg-white shadow-lg">
      <div className="w-full h-[5rem] flex justify-between items-center px-6">
        {/* Logo */}
        <Image 
          src={'/logo.png'}
          width={140}
          height={140}
          alt='DriveEase'
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-8">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/#about"}>About</Link></li>
            <li><Link href={"/#services"}>Services</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
            <li>
              <Link 
                className="font-semibold bg-[#006FFF] hover:bg-white hover:text-black border border-2 transition-all duration-300 hover:border-[#006FFF] text-white px-6 py-3 rounded-md" 
                href={"/"}
              >
                Rent Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[5rem] left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li><Link href={"/"} onClick={toggleMenu}>Home</Link></li>
              <li><Link href={"/#about"} onClick={toggleMenu}>About</Link></li>
              <li><Link href={"/#services"} onClick={toggleMenu}>Services</Link></li>
              <li><Link href={"/contact"} onClick={toggleMenu}>Contact</Link></li>
              <li>
                <Link 
                  className="font-semibold bg-[#006FFF] hover:bg-white hover:text-black border border-2 transition-all duration-300 hover:border-[#006FFF] text-white px-6 py-3 rounded-md" 
                  href={"/"}
                  onClick={toggleMenu}
                >
                  Rent Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

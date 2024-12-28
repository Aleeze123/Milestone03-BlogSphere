"use client";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { FaHome, FaPen, FaInfoCircle, FaPhone } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="bg-white bg-opacity-85 shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image src="/icons.png" alt="Logo" width={120} height={120} className="mr-2" />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" passHref>
              <div className="flex items-center text-black hover:text-darkblue transition duration-300 cursor-pointer">
                <FaHome className="mr-2" />
                HOME
              </div>
            </Link>
            <Link href="/Blog" passHref>
              <div className="flex items-center text-black hover:text-darkblue transition duration-300 cursor-pointer">
                <FaPen className="mr-2" />
                BLOGS
              </div>
            </Link>
            <Link href="/About" passHref>
              <div className="flex items-center text-black hover:text-darkblue transition duration-300 cursor-pointer">
                <FaInfoCircle className="mr-2" />
                ABOUT
              </div>
            </Link>
            <Link href="/Contact" passHref>
              <div className="flex items-center text-black hover:text-darkblue transition duration-300 cursor-pointer">
                <FaPhone className="mr-2" />
                CONTACT
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              id="menu-button"
              aria-label="Toggle menu"
              className={`transition-transform duration-300 transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <span className="text-black text-2xl">✖</span>
              ) : (
                <span className="text-black text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-start justify-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <nav className="space-y-6 mt-12 pl-6">
          <Link href="/" legacyBehavior>
            <a className="flex items-center text-black text-lg hover:text-darkblue transition duration-300" onClick={() => setIsMenuOpen(false)}>
              <FaHome className="mr-2" />
              HOME
            </a>
          </Link>
          <Link href="/Blog" legacyBehavior>
            <a className="flex items-center text-black text-lg hover:text-darkblue transition duration-300" onClick={() => setIsMenuOpen(false)}>
              <FaPen className="mr-2" />
              BLOGS
            </a>
          </Link>
          <Link href="/About" legacyBehavior>
            <a className="flex items-center text-black text-lg hover:text-darkblue transition duration-300" onClick={() => setIsMenuOpen(false)}>
              <FaInfoCircle className="mr-2" />
              ABOUT
            </a>
          </Link>
          <Link href="/Contact" legacyBehavior>
            <a className="flex items-center text-black text-lg hover:text-darkblue transition duration-300" onClick={() => setIsMenuOpen(false)}>
              <FaPhone className="mr-2" />
              CONTACT
            </a>
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Navbar;

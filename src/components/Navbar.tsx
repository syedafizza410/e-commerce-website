'use client'; // Ensures this component runs on the client-side only

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { cart } = useCart(); // Access cart context
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md rounded-md">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-tight text-white hover:text-gray-300 transition duration-300">
        <Link href="/">Timeless Watches</Link>
      </h1>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="text-white text-3xl md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:space-x-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left`}
      >
        <li className="hover:bg-gray-800 py-2 px-4 md:hover:bg-transparent md:hover:text-gray-300 transition duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-800 py-2 px-4 md:hover:bg-transparent md:hover:text-gray-300 transition duration-300">
          <Link href="/products">Products</Link>
        </li>
        <li className="hover:bg-gray-800 py-2 px-4 md:hover:bg-transparent md:hover:text-gray-300 transition duration-300">
          <Link href="/cart">
            Cart{' '}
            {cartCount > 0 && (
              <span className="bg-red-600 px-2 py-1 rounded-full text-sm font-bold ml-1">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li className="hover:bg-gray-800 py-2 px-4 md:hover:bg-transparent md:hover:text-gray-300 transition duration-300">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="hover:bg-gray-800 py-2 px-4 md:hover:bg-transparent md:hover:text-gray-300 transition duration-300">
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

'use client'; // Ensures this component runs on the client-side only

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { cart } = useCart(); // Access cart context
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md rounded-md">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold tracking-tight text-white hover:text-gray-300 transition duration-300">
        <Link href="/">Timeless Watches</Link>
      </h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-gray-300 transition duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
          <Link href="/products">Products</Link>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
          <Link href="/cart">
            Cart{' '}
            {cartCount > 0 && (
              <span className="bg-red-600 px-2 py-1 rounded-full text-sm font-bold ml-1">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
          <Link href="/login">Login</Link>
        </li>
        <li className="hover:text-gray-300 transition duration-300">
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

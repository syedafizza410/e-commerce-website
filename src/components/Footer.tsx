import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h1 className="text-3xl font-bold">Timeless Watches</h1>
          <p className="text-gray-400 mt-4">
            Discover the elegance of time with our premium collection of watches. 
            Where style meets precision.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">Shop</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">Contact</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-400">
            Subscribe to get the latest updates, special offers, and discounts.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 text-gray-400 text-center py-4">
        <p>© {new Date().getFullYear()} Timeless Watches. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

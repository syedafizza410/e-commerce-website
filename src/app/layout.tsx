import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Watches Store',
  description: 'A modern e-commerce website for watches',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        <Navbar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

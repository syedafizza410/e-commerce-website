'use client';

import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../../../api/products/route';
import React from 'react';

interface Product {
  id: number;
  name: string;
  details?: string;
  price: number;
  image: string;
  originalPrice?: number | null; 
  sale?: boolean; 
}

const ProductDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const { id } = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productData = await fetchProductById(Number(id));
        if (isMounted) {
          if (productData) {
            setProduct({
              ...productData,
              details: productData.details || 'No details available',
              originalPrice: productData.originalPrice ?? null,
              sale: productData.sale ?? false,
            });
          } else {
            setProduct(null);
          }
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
        if (isMounted) setProduct(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      });
    }
  };

  const handleProceedToCheckout = () => {
    if (product) {
      const checkoutURL = `/checkout?id=${product.id}&name=${encodeURIComponent(
        product.name
      )}&price=${product.price}&image=${encodeURIComponent(product.image)}&quantity=${quantity}`;
      router.push(checkoutURL);
    }
  };

  if (loading) {
    return <div className="p-8 text-gray-600">Loading product details...</div>;
  }

  if (!product) {
    return <div className="p-8 text-red-600">Product not found!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Product Details</h1>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="uppercase text-white text-sm tracking-wide">Brand Name</h2>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-lg">
                $ {product.originalPrice.toLocaleString()} USD
              </span>
            )}
            <span className="text-red-600 text-2xl font-bold">
              $ {product.price.toLocaleString()} USD
            </span>
            {product.sale && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Sale
              </span>
            )}
          </div>

          {/* Product Details */}
          <p className="text-white">{product.details}</p>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-white">Quantity</span>
            <button
              onClick={handleDecreaseQuantity}
              className="border border-gray-400 px-2 py-1 rounded-l bg-gray-100 hover:bg-gray-200 text-black"
            >
              -
            </button>
            <span className="border-t border-b border-gray-400 px-4 py-1">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="border border-gray-400 px-2 py-1 rounded-r bg-gray-100 hover:bg-gray-200 text-black"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Add to cart
            </button>
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-white text-black px-6 py-3 rounded-md border border-gray-400 hover:bg-gray-100 transition"
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [product, setProduct] = useState({
    id: 'unknown',
    name: 'Unnamed Product',
    price: 0,
    image: '/placeholder.jpg',
    quantity: 1,
  });

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const parsedProduct = {
      id: searchParams.get('id') || 'unknown',
      name: searchParams.get('name') || 'Unnamed Product',
      price: Number(searchParams.get('price')) || 0,
      image: searchParams.get('image') || '/placeholder.jpg',
      quantity: Number(searchParams.get('quantity')) || 1,
    };

    setProduct(parsedProduct);
    setQuantity(parsedProduct.quantity);
  }, [searchParams]);

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handlePlaceOrder = async () => {
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement | null;
    const addressInput = document.querySelector('input[placeholder="Address"]') as HTMLInputElement | null;
    const paymentMethod = document.querySelector('input[name="payment"]:checked') as HTMLInputElement | null;

    if (!emailInput?.value.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }

    if (!addressInput?.value) {
      alert('Please provide a valid address.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    const orderData = {
      productId: product.id,
      productName: product.name,
      totalAmount: product.price * quantity,
      email: emailInput.value,
      address: addressInput.value,
      paymentMethod: paymentMethod.value,
    };

    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (response.ok) {
      alert('Order placed successfully!');
      router.push('/');
    } else {
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <p className="text-lg text-gray-300 mt-2">Price: ${product.price}</p>
          <div className="flex items-center mt-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              -
            </button>
            <span className="mx-4 text-xl">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              +
            </button>
          </div>
          <p className="text-lg text-gray-300 mt-4">
            Total: <span className="font-bold">${product.price * quantity}</span>
          </p>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Contact & Delivery</h2>
          <form className="grid grid-cols-1 gap-4">
            <input type="email" placeholder="Email" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="First Name" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="Last Name" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="Address" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="City" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="Postal Code" className="border p-3 rounded bg-gray-700 text-white" />
            <input type="text" placeholder="Phone" className="border p-3 rounded bg-gray-700 text-white" />
          </form>

          <h2 className="text-2xl font-bold mt-6">Payment</h2>
          <div className="flex flex-col gap-4 mt-4">
            <label>
              <input type="radio" name="payment" className="mr-2" value="Cash on Delivery" /> Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" className="mr-2" value="Card" /> Debit/Credit Card
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-700 w-full"
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

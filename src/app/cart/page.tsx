'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Decrease quantity or remove the product
  const handleRemove = (id: number) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      if (product.quantity > 1) {
        updateQuantity(id, product.quantity - 1);
      } else {
        removeFromCart(id);
      }
    }
  };

  const handlePlaceOrder = () => {
    console.log('Placing order...', cart);
    setIsOrderPlaced(true);
    clearCart(); 
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return; 
    updateQuantity(id, quantity);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 h-screen w-96 bg-white shadow-lg p-6 overflow-y-auto z-50">
        <button
          onClick={() => window.history.back()} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">Cart</h2>

        {isOrderPlaced ? (
          <div className="text-center text-green-600">
            <h2 className="text-xl font-semibold mb-4">
              Thank you for your order!
            </h2>
            <p>Your order has been placed successfully.</p>
          </div>
        ) : (
          <>
            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty. Add some products!
              </p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-6"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium text-black">{item.name}</h3>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-700 border border-gray-300 px-2 py-1"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            className="w-12 mx-2 text-center text-black border border-gray-300"
                            onChange={(e) =>
                              handleUpdateQuantity(
                                item.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-700 border border-gray-300 px-2 py-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">
                        $ {item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-sm text-red-500 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <textarea
                    placeholder="Order Note"
                    className="w-full p-2 border border-gray-300 rounded mt-4 text-black"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-semibold text-black">Subtotal</p>
                    <p className="text-xl font-semibold text-black">
                      $ {' '}
                      {cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                    </p>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-blue-600 text-white py-3 rounded mt-6 hover:bg-blue-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
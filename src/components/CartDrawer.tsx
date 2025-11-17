"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeItem, isOpen, setIsOpen, subtotal } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-black/95 text-white shadow-xl transform 
      transition-transform duration-300 z-50
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-300 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* CART ITEMS */}
      <div className="p-4 divide-y divide-gray-800 overflow-y-auto h-[70%]">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="py-4 flex gap-4 items-center">
              <img
                src={item.image}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.price}</p>
              </div>

              <button
                onClick={() => removeItem(index)}
                className="text-red-400 hover:text-red-200 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* SUBTOTAL + CHECKOUT */}
      {cart.length > 0 && (
        <div className="px-4 py-6 border-t border-gray-800">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <button className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  title: string;
  price: string; // "₹12,999"
  image: string;
  quantity: number; // NEW
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeItem: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
    setIsOpen(true);
  };

  const removeItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((acc, item) => {
    const numericPrice = Number(item.price.replace(/[^0-9]/g, ""));
    return acc + numericPrice;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, isOpen, setIsOpen, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext) as CartContextType; // FIXED
}

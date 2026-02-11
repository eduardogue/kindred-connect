import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalPoints: number;
  userPoints: number;
  addItem: (product: Product, quantity: number) => void;
  clearCart: () => void;
  confirmOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("mcdonalds-cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [userPoints, setUserPoints] = useState<number>(() => {
    const saved = localStorage.getItem("mcdonalds-points");
    return saved ? JSON.parse(saved) : 42350;
  });

  useEffect(() => {
    localStorage.setItem("mcdonalds-cart", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("mcdonalds-points", JSON.stringify(userPoints));
  }, [userPoints]);

  const totalPoints = items.reduce((sum, item) => sum + item.product.points * item.quantity, 0);

  const addItem = (product: Product, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const clearCart = () => setItems([]);

  const confirmOrder = () => {
    setUserPoints((prev) => prev - totalPoints);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ items, totalPoints, userPoints, addItem, clearCart, confirmOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

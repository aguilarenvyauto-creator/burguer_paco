import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, ScreenName } from './types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  screen: ScreenName;
  setScreen: (screen: ScreenName) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [screen, setScreen] = useState<ScreenName>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (item: CartItem) => {
    // Check if identical item exists (same id, doneness, extras)
    // Simplified: Just add new item for now to allow multiple customizations
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => {
    let itemPrice = item.price;
    if (item.extras) {
      itemPrice += item.extras.reduce((acc, extra) => acc + extra.price, 0);
    }
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        screen,
        setScreen,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
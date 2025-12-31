export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'sides' | 'drinks' | 'shakes' | 'desserts';
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CartItem extends Product {
  cartId: string;
  quantity: number;
  doneness?: string;
  extras?: Extra[];
  removedIngredients?: string[];
}

export interface Extra {
  id: string;
  name: string;
  price: number;
  image?: string;
  color?: string; // fallback if no image
}

export interface User {
  name: string;
  points: number;
  maxPoints: number;
  avatar: string;
  level: string;
}

export type ScreenName = 'home' | 'menu' | 'detail' | 'cart' | 'checkout' | 'success' | 'profile';

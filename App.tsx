import React from 'react';
import { useCart } from './store';
import { HomeScreen } from './screens/HomeScreen';
import { MenuScreen } from './screens/MenuScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { ProfileScreen } from './screens/ProfileScreen';

const App: React.FC = () => {
  const { screen } = useCart();

  switch (screen) {
    case 'home':
      return <HomeScreen />;
    case 'menu':
      return <MenuScreen />;
    case 'detail':
      return <ProductDetailScreen />;
    case 'cart':
      return <CartScreen />;
    case 'checkout':
      return <CheckoutScreen />;
    case 'profile':
      return <ProfileScreen />;
    default:
      return <HomeScreen />;
  }
};

export default App;
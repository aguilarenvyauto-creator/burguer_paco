import React from 'react';
import { useCart } from '../store';

export const BottomNav: React.FC = () => {
  const { screen, setScreen } = useCart();

  const navItems = [
    { name: 'home', icon: 'home', label: 'Inicio' },
    { name: 'menu', icon: 'restaurant_menu', label: 'Menú' },
    { name: 'cart', icon: 'shopping_cart', label: 'Pedido', isFab: true },
    { name: 'favorites', icon: 'favorite', label: 'Favoritos' },
    { name: 'profile', icon: 'person', label: 'Perfil' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 px-5 z-40 max-w-md mx-auto pointer-events-none">
      <div className="bg-[#1f160e]/95 backdrop-blur-xl rounded-2xl h-16 flex items-center justify-around shadow-2xl border border-white/5 pointer-events-auto">
        {navItems.map((item) => {
          if (item.isFab) {
            // No action on FAB in this design, or could navigate to cart
            return (
              <button
                key={item.name}
                onClick={() => setScreen('cart')}
                className="w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 -mt-8 border-4 border-[#231a10] transform transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined text-white">add</span>
              </button>
            );
          }

          const isActive = screen === item.name;
          return (
            <button
              key={item.name}
              onClick={() => {
                  if(item.name === 'home' || item.name === 'menu' || item.name === 'profile') {
                      setScreen(item.name as any)
                  }
              }}
              className={`flex flex-col items-center justify-center w-12 gap-1 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-500 hover:text-white'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'filled' : ''}`}>
                {item.icon}
              </span>
              {isActive && <span className="w-1 h-1 rounded-full bg-primary" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
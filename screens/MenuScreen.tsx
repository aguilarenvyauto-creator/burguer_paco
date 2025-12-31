import React, { useState } from 'react';
import { useCart } from '../store';
import { PRODUCTS, USER } from '../constants';
import { BottomNav } from '../components/BottomNav';

export const MenuScreen: React.FC = () => {
  const { setScreen, setSelectedProduct, cartTotal, cart } = useCart();
  const [activeTab, setActiveTab] = useState<'burgers' | 'sides' | 'drinks' | 'desserts'>('burgers');

  const filteredProducts = PRODUCTS.filter(p => {
      if (activeTab === 'burgers') return p.category === 'burgers';
      if (activeTab === 'sides') return p.category === 'sides';
      if (activeTab === 'drinks') return p.category === 'drinks';
      if (activeTab === 'desserts') return p.category === 'desserts' || p.category === 'shakes';
      return true;
  });

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setScreen('detail');
  }

  const tabs = [
      { id: 'burgers', label: 'Hamburguesas', icon: 'lunch_dining' },
      { id: 'sides', label: 'Acompañamientos', icon: 'tapas' },
      { id: 'drinks', label: 'Bebidas', icon: 'local_bar' },
      { id: 'desserts', label: 'Postres', icon: 'icecream' },
  ];

  return (
    <div className="min-h-screen pb-24 bg-background-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <button onClick={() => setScreen('home')} className="text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[28px]">arrow_back</span>
            </button>
            <h1 className="text-white text-xl font-extrabold tracking-tight">Burger Paco</h1>
        </div>
        <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-surface-dark overflow-hidden border border-white/10" onClick={() => setScreen('profile')}>
                <img src={USER.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>
      </header>

      {/* Tabs */}
      <nav className="sticky top-[60px] z-40 bg-background-dark py-3 pl-4 border-b border-white/5 overflow-hidden">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pr-4">
            {tabs.map(tab => (
                <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex shrink-0 items-center justify-center gap-x-2 rounded-full px-5 py-2 transition-transform active:scale-95 ${
                        activeTab === tab.id 
                        ? 'bg-primary text-background-dark' 
                        : 'bg-surface-dark border border-white/5 text-white hover:bg-white/5'
                    }`}
                >
                    <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                    <span className="text-sm font-bold leading-normal">{tab.label}</span>
                </button>
            ))}
        </div>
      </nav>

      {/* Products */}
      <main className="flex flex-col px-4 pt-4 gap-6">
          <div className="flex flex-col gap-5">
              {filteredProducts.map(product => (
                  <article 
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="group bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-white/5 cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/9] bg-gray-800 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {product.isPopular && (
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                <span className="text-background-dark font-extrabold text-sm">Top Ventas</span>
                            </div>
                        )}
                    </div>
                    <div className="p-5 flex flex-col gap-3">
                        <div>
                            <h3 className="text-white text-xl font-bold leading-tight mb-1">{product.name}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{product.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-white text-xl font-bold">{product.price.toFixed(2)} €</span>
                            <button className="bg-primary hover:bg-orange-500 text-background-dark rounded-full h-10 px-6 flex items-center justify-center font-bold text-sm transition-colors active:scale-95">
                                <span className="material-symbols-outlined text-[18px] mr-1">add</span> Añadir
                            </button>
                        </div>
                    </div>
                  </article>
              ))}
          </div>
      </main>
      
      {/* Floating Cart Button */}
      {cart.length > 0 && (
          <div className="fixed bottom-24 left-4 right-4 z-50">
            <button 
                onClick={() => setScreen('cart')}
                className="w-full bg-primary text-background-dark font-bold text-lg rounded-full h-14 shadow-lg shadow-primary/20 flex items-center justify-between px-6 transition-transform active:scale-95"
            >
                <div className="flex items-center gap-2">
                    <span className="bg-background-dark/20 size-8 rounded-full flex items-center justify-center text-sm font-extrabold">{cart.reduce((a, b) => a + b.quantity, 0)}</span>
                    <span>Ver mi pedido</span>
                </div>
                <span>{cartTotal.toFixed(2)} €</span>
            </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};
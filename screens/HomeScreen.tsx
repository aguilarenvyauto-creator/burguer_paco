import React from 'react';
import { useCart } from '../store';
import { PRODUCTS, CATEGORIES, USER } from '../constants';
import { BottomNav } from '../components/BottomNav';

export const HomeScreen: React.FC = () => {
  const { setScreen, setSelectedProduct, cartTotal, cart } = useCart();
  const popularProducts = PRODUCTS.filter(p => p.isPopular);
  const featuredProduct = PRODUCTS.find(p => p.isNew) || PRODUCTS[0];

  const handleProductClick = (product: any) => {
      setSelectedProduct(product);
      setScreen('detail');
  }

  return (
    <div className="min-h-screen pb-24 relative bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 max-w-md mx-auto bg-background-dark/90 backdrop-blur-md px-5 py-4 flex items-center justify-between">
        <button className="text-white p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined !text-[28px]">menu</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-primary">BURGER PACO</span>
        </div>
        <button 
            onClick={() => setScreen('cart')}
            className="relative text-white p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined !text-[28px]">shopping_bag</span>
          {cart.length > 0 && (
            <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          )}
        </button>
      </div>

      <div className="h-20"></div>

      <div className="flex flex-col gap-8 px-5 pb-6">
        {/* Hero */}
        <div className="flex flex-col gap-6 pt-2">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => handleProductClick(featuredProduct)}>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10"></div>
            <img 
                src={featuredProduct.image} 
                alt={featuredProduct.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-20 pr-4">
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-2 shadow-lg">Nuevo</span>
              <h2 className="text-white text-3xl font-extrabold leading-tight shadow-sm">{featuredProduct.name}</h2>
              <p className="text-gray-200 text-sm mt-1 font-medium truncate max-w-[250px]">{featuredProduct.description}</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <h1 className="text-2xl font-bold leading-tight">Smash Burgers de Verdad</h1>
            <p className="text-gray-400 text-sm max-w-[280px]">
              Carne fresca, aplastada al momento. El sabor urbano que estabas buscando.
            </p>
          </div>

          <div className="flex gap-4 w-full">
            <button 
                onClick={() => handleProductClick(featuredProduct)}
                className="flex-1 h-14 bg-primary hover:bg-orange-600 active:scale-95 transition-all rounded-full flex items-center justify-center gap-2 text-white font-bold text-lg shadow-lg shadow-orange-500/20"
            >
              <span>Pedir ahora</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
            <button 
                onClick={() => setScreen('menu')}
                className="flex-1 h-14 bg-transparent border-2 border-gray-700 hover:border-primary active:scale-95 transition-all rounded-full flex items-center justify-center text-white font-bold text-lg"
            >
              Ver carta
            </button>
          </div>
        </div>

        {/* Loyalty */}
        <div className="bg-surface-dark p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-800">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div className="flex flex-col flex-1 gap-1.5">
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold">Paco Points</span>
              <span className="text-xs text-primary font-bold">450 / 500</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>

        {/* Popular */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="text-primary">🔥</span> Las más pedidas
            </h3>
            <button onClick={() => setScreen('menu')} className="text-sm text-primary font-bold hover:underline">Ver todas</button>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-5 px-5 no-scrollbar snap-x">
            {popularProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="snap-center shrink-0 w-[240px] flex flex-col bg-surface-dark rounded-2xl overflow-hidden shadow-md border border-gray-800 group cursor-pointer"
              >
                <div className="h-32 w-full relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <button className="absolute bottom-2 right-2 bg-gray-900 text-primary p-1.5 rounded-full shadow-md hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-base leading-tight">{product.name}</h4>
                    <span className="text-primary font-bold text-sm">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Categorías</h3>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => setScreen('menu')}
                className="h-20 bg-surface-dark rounded-xl relative overflow-hidden flex items-center justify-center group cursor-pointer border border-gray-800 hover:border-primary transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
                <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
                <span className="relative z-20 font-bold text-white text-lg">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
import React, { useState } from 'react';
import { useCart } from '../store';
import { EXTRAS } from '../constants';
import { Extra } from '../types';

export const ProductDetailScreen: React.FC = () => {
  const { setScreen, selectedProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [doneness, setDoneness] = useState('punto');
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>([]);
  const [removedIngredients, setRemovedIngredients] = useState<string[]>([]);
  
  if (!selectedProduct) {
      setScreen('menu');
      return null;
  }

  // Base ingredients logic mocked for display
  const baseIngredients = ['Lechuga', 'Tomate', 'Cebolla', 'Salsa Paco'];

  const toggleIngredient = (ing: string) => {
      if (removedIngredients.includes(ing)) {
          setRemovedIngredients(prev => prev.filter(i => i !== ing));
      } else {
          setRemovedIngredients(prev => [...prev, ing]);
      }
  };

  const toggleExtra = (extra: Extra) => {
      if (selectedExtras.find(e => e.id === extra.id)) {
          setSelectedExtras(prev => prev.filter(e => e.id !== extra.id));
      } else {
          setSelectedExtras(prev => [...prev, extra]);
      }
  };

  const currentPrice = (selectedProduct.price + selectedExtras.reduce((acc, ex) => acc + ex.price, 0)) * quantity;

  const handleAddToCart = () => {
      addToCart({
          ...selectedProduct,
          cartId: Math.random().toString(36).substr(2, 9),
          quantity,
          doneness,
          extras: selectedExtras,
          removedIngredients
      });
      setScreen('menu');
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-32 bg-background-dark">
      {/* App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <button 
            onClick={() => setScreen('menu')}
            className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight flex-1 text-center">Personalizar</h2>
        <button className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full px-4 pt-4 pb-2">
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl shadow-lg group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${selectedProduct.image}")` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <h1 className="text-white text-3xl font-extrabold tracking-tight drop-shadow-sm">{selectedProduct.name}</h1>
                <p className="text-primary font-bold text-xl mt-1 drop-shadow-sm">${selectedProduct.price.toFixed(2)}</p>
            </div>
        </div>
      </div>

      {/* Doneness */}
      {selectedProduct.category === 'burgers' && (
        <div className="flex flex-col px-4 pt-6">
            <h2 className="text-white text-lg font-bold leading-tight mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">skillet</span>
                Elige el punto
            </h2>
            <div className="flex p-1 bg-[#2f241a] rounded-full relative">
                {['poco', 'punto', 'muy'].map((val) => (
                    <label key={val} className="flex-1 cursor-pointer">
                        <input 
                            className="peer sr-only" 
                            name="doneness" 
                            type="radio" 
                            value={val} 
                            checked={doneness === val}
                            onChange={() => setDoneness(val)}
                        />
                        <div className="flex items-center justify-center py-2.5 rounded-full text-sm font-semibold text-[#cbad90] peer-checked:bg-primary peer-checked:text-white peer-checked:shadow-md transition-all duration-200 capitalize">
                            {val === 'poco' ? 'Poco hecha' : val === 'punto' ? 'Al punto' : 'Muy hecha'}
                        </div>
                    </label>
                ))}
            </div>
        </div>
      )}

      {/* Base Ingredients */}
      <div className="flex flex-col pt-8">
        <h2 className="px-4 text-white text-lg font-bold leading-tight mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
            Ingredientes base
        </h2>
        <p className="px-4 text-sm text-white/50 mb-4 -mt-2">Toca para eliminar</p>
        <div className="flex overflow-x-auto px-4 pb-4 gap-3 no-scrollbar snap-x">
            {baseIngredients.map(ing => {
                const isRemoved = removedIngredients.includes(ing);
                return (
                    <button 
                        key={ing}
                        onClick={() => toggleIngredient(ing)}
                        className={`snap-start shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all active:scale-95 border-2 ${
                            isRemoved 
                            ? 'bg-transparent border-white/10 text-white/30 line-through' 
                            : 'bg-[#2f241a] border-primary/20 hover:border-primary text-[#e8dccf]'
                        }`}
                    >
                        <span className="text-sm font-semibold">{ing}</span>
                        {!isRemoved && <span className="material-symbols-outlined text-[16px] text-primary">close</span>}
                    </button>
                )
            })}
        </div>
      </div>

      {/* Extras */}
      <div className="flex flex-col px-4 pt-6 pb-20">
        <h2 className="text-white text-lg font-bold leading-tight mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">add_circle</span>
            Añadir extras
        </h2>
        <div className="space-y-3">
            {EXTRAS.map(extra => {
                const isSelected = !!selectedExtras.find(e => e.id === extra.id);
                return (
                    <label 
                        key={extra.id}
                        className={`flex items-center justify-between p-3 rounded-2xl bg-[#2c2117] border transition-all shadow-sm cursor-pointer ${
                            isSelected ? 'border-primary/50 bg-primary/5' : 'border-transparent'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-white/10 overflow-hidden shrink-0">
                                {extra.image ? (
                                    <img src={extra.image} alt={extra.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full" style={{ backgroundColor: extra.color }}></div>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-white">{extra.name}</span>
                                <span className="text-primary font-bold text-sm">+${extra.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="relative flex items-center">
                            <input 
                                className="peer sr-only" 
                                type="checkbox" 
                                checked={isSelected}
                                onChange={() => toggleExtra(extra)}
                            />
                            <div className="size-6 rounded-full border-2 border-white/30 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-all">
                                <span className="material-symbols-outlined text-white text-[16px] opacity-0 peer-checked:opacity-100">check</span>
                            </div>
                        </div>
                    </label>
                )
            })}
        </div>
      </div>

      {/* Sticky Bottom */}
      <div className="fixed bottom-0 w-full bg-background-dark border-t border-white/5 p-4 z-40 pb-8">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
            <div className="flex items-center bg-[#2c2117] rounded-full p-1 border border-white/5 shadow-sm">
                <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="size-11 flex items-center justify-center rounded-full text-white/70 hover:bg-white/10 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="w-8 text-center font-bold text-lg text-white">{quantity}</span>
                <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="size-11 flex items-center justify-center rounded-full text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
            <button 
                onClick={handleAddToCart}
                className="flex-1 h-[56px] bg-primary rounded-full flex items-center justify-between px-6 text-white font-bold shadow-lg shadow-primary/25 active:scale-[0.98] transition-all hover:bg-orange-600"
            >
                <span>Añadir al pedido</span>
                <span className="bg-black/20 rounded-lg px-2 py-0.5 text-sm">${currentPrice.toFixed(2)}</span>
            </button>
        </div>
      </div>
    </div>
  );
};
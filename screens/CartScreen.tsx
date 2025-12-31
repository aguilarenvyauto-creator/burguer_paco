import React from 'react';
import { useCart } from '../store';

export const CartScreen: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, setScreen } = useCart();
  const deliveryFee = 2.50;
  const total = cartTotal + deliveryFee;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-background-dark">
      <header className="flex items-center px-6 py-4 pt-6 justify-between bg-background-dark sticky top-0 z-20">
        <button onClick={() => setScreen('menu')} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10 text-white">Mi Pedido</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 px-6">
        {/* Toggle */}
        <div className="py-4">
          <div className="flex h-14 w-full items-center justify-center rounded-full bg-[#2f241a] p-1.5 shadow-sm">
            <label className="relative flex cursor-pointer h-full flex-1 items-center justify-center rounded-full transition-all duration-200">
              <input checked className="peer invisible absolute w-0 h-0" name="delivery-mode" type="radio" onChange={()=>{}} />
              <div className="absolute inset-0 rounded-full bg-transparent peer-checked:bg-primary transition-all shadow-none peer-checked:shadow-md"></div>
              <span className="relative z-10 text-sm font-semibold text-text-secondary peer-checked:text-white">Entrega</span>
            </label>
            <label className="relative flex cursor-pointer h-full flex-1 items-center justify-center rounded-full transition-all duration-200">
              <input className="peer invisible absolute w-0 h-0" name="delivery-mode" type="radio" onChange={()=>{}} />
              <div className="absolute inset-0 rounded-full bg-transparent peer-checked:bg-primary transition-all shadow-none peer-checked:shadow-md"></div>
              <span className="relative z-10 text-sm font-semibold text-text-secondary peer-checked:text-white">Recoger</span>
            </label>
          </div>
        </div>

        {/* List */}
        <div className="space-y-6 mt-2">
            {cart.map(item => (
                <div key={item.cartId} className="flex items-start gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20 shrink-0 shadow-lg" style={{ backgroundImage: `url("${item.image}")` }}></div>
                    <div className="flex flex-col flex-1 h-full justify-between min-h-[5rem]">
                        <div>
                            <p className="text-base font-bold leading-tight line-clamp-1 mb-1 text-white">{item.name}</p>
                            <p className="text-text-secondary text-xs font-medium leading-normal line-clamp-2">
                                {item.extras && item.extras.length > 0 ? `+ ${item.extras.map(e => e.name).join(', ')}` : item.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                            <div className="flex items-center gap-3 bg-[#2f241a] rounded-full p-1 pr-3 pl-1 shadow-sm">
                                <button 
                                    onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-lighter hover:bg-primary/20 text-white transition-colors"
                                >
                                    <span className="material-symbols-outlined text-sm font-bold">remove</span>
                                </button>
                                <span className="text-sm font-semibold w-2 text-center text-white">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                    className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
                                >
                                    <span className="material-symbols-outlined text-sm font-bold">add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="my-8 h-px bg-white/10 w-full"></div>

        <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-semibold text-white">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-text-secondary">Envío</span>
                <span className="font-semibold text-white">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-lg mt-4 pt-2">
                <span className="font-bold text-white">Total</span>
                <span className="font-bold text-primary text-xl">${total.toFixed(2)}</span>
            </div>
        </div>

        <div className="flex items-center gap-3 bg-[#2f241a] p-4 rounded-xl border border-white/5 shadow-sm">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary/70">Tiempo estimado</span>
                <span className="font-bold text-sm text-white">20 - 30 min</span>
            </div>
        </div>
      </main>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-background-dark border-t border-white/5 z-30 pb-10">
        <button 
            onClick={() => setScreen('checkout')}
            disabled={cart.length === 0}
            className="w-full h-14 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all rounded-full flex items-center justify-between px-6 shadow-lg shadow-primary/25 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <span className="font-bold text-white text-base">Finalizar pedido</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm font-bold backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                ${total.toFixed(2)}
            </span>
        </button>
      </div>
    </div>
  );
};
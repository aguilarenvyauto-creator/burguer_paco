import React, { useState, useEffect } from 'react';
import { useCart } from '../store';

export const CheckoutScreen: React.FC = () => {
  const { setScreen, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const deliveryFee = 2.50;
  const total = cartTotal + deliveryFee;

  const handlePay = () => {
    // Simulate payment processing
    setTimeout(() => {
        setIsSuccess(true);
        clearCart();
    }, 1000);
  };

  if (isSuccess) {
      return (
        <div className="relative flex flex-col h-screen w-full bg-background-dark overflow-hidden shadow-2xl items-center justify-center text-center p-8">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[80%] bg-gradient-to-b from-primary/10 via-background-dark to-background-dark rounded-full blur-3xl opacity-50"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-10">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse-slow"></div>
                    <div className="relative size-40 bg-surface-dark rounded-full flex items-center justify-center border-4 border-primary/30 shadow-2xl shadow-primary/20">
                        <div className="text-[64px] relative">
                            🍔
                            <div className="absolute -bottom-2 -right-2 text-[32px] drop-shadow-lg">🔥</div>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full size-12 flex items-center justify-center border-4 border-background-dark shadow-lg">
                            <span className="material-symbols-outlined text-[28px] font-bold">check</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 max-w-xs mx-auto animate-fade-in">
                    <h2 className="text-white text-4xl font-extrabold tracking-tight">¡Gracias!</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Tu pedido ha sido confirmado y ya se está preparando en la cocina.
                    </p>
                </div>

                <div className="mt-12 w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-slide-up">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-400 text-sm">Pedido #29381</span>
                        <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">En preparación</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-full animate-pulse"></div>
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-white text-sm font-medium">Estimado en 25 min</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 w-full">
                    <button 
                        onClick={() => setScreen('home')}
                        className="w-full bg-white text-background-dark hover:bg-gray-100 font-bold text-lg h-14 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                    >
                        <span>Seguir Pedido</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button onClick={() => setScreen('home')} className="mt-4 text-gray-500 hover:text-white text-sm font-medium transition-colors">
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
      )
  }

  return (
    <div className="relative flex flex-col min-h-screen bg-background-dark text-white pb-24">
        {/* Header */}
        <div className="flex items-center px-4 py-4 justify-between bg-background-dark shrink-0 z-10 sticky top-0">
            <button onClick={() => setScreen('cart')} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Finalizar Pedido</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
            {/* Toggle */}
            <div className="py-4">
                <div className="flex h-12 w-full items-center justify-center rounded-full bg-surface-dark p-1 relative">
                    <div className="absolute left-1 top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full shadow-md z-0"></div>
                    <label className="flex cursor-pointer h-full flex-1 items-center justify-center rounded-full z-10">
                        <input checked readOnly className="hidden" name="delivery_type" type="radio" />
                        <span className="text-white text-sm font-bold tracking-wide">Entrega</span>
                    </label>
                    <label className="flex cursor-pointer h-full flex-1 items-center justify-center rounded-full z-10 group">
                        <input className="hidden" name="delivery_type" type="radio" />
                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-semibold">Recogida</span>
                    </label>
                </div>
            </div>

            {/* Address */}
            <div>
                <h3 className="tracking-tight text-xl font-bold leading-tight pb-3 pt-2">Dirección de entrega</h3>
                <div className="flex items-center gap-4 bg-surface-dark p-4 rounded-2xl shadow-sm border border-white/5">
                    <div className="flex items-center justify-center rounded-full bg-primary/20 shrink-0 size-12 text-primary">
                        <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                        <p className="text-base font-bold leading-snug truncate">Casa</p>
                        <p className="text-gray-400 text-sm font-medium leading-normal truncate">Calle Gran Vía 24, 2B</p>
                    </div>
                    <button className="shrink-0 size-10 flex items-center justify-center rounded-full hover:bg-white/10 text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                    </button>
                </div>
            </div>

            {/* Payment */}
            <div className="mt-6">
                <div className="flex items-center justify-between pb-3">
                    <h3 className="tracking-tight text-xl font-bold leading-tight">Método de Pago</h3>
                    <button className="text-primary text-sm font-bold">Añadir</button>
                </div>
                <div className="space-y-3">
                    <label className="relative flex items-center gap-4 bg-surface-dark p-4 rounded-2xl border-2 border-primary shadow-sm cursor-pointer group transition-all">
                        <input defaultChecked className="peer sr-only" name="payment" type="radio" />
                        <div className="flex items-center justify-center rounded-xl bg-black text-white shrink-0 w-14 h-10">
                            <span className="material-symbols-outlined">ios</span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-base font-bold">Apple Pay</p>
                            <p className="text-gray-400 text-xs">Pago rápido</p>
                        </div>
                        <div className="size-6 rounded-full border-2 border-gray-600 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-white text-[16px] scale-0 peer-checked:scale-100 transition-transform">check</span>
                        </div>
                    </label>

                    <label className="relative flex items-center gap-4 bg-surface-dark p-4 rounded-2xl border border-white/5 shadow-sm cursor-pointer hover:border-primary/50 transition-all">
                        <input className="peer sr-only" name="payment" type="radio" />
                        <div className="flex items-center justify-center rounded-xl bg-white/10 shrink-0 w-14 h-10 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                            <span className="material-symbols-outlined text-white">credit_card</span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-base font-bold">Mastercard</p>
                            <p className="text-gray-400 text-xs">**** 4242</p>
                        </div>
                        <div className="size-6 rounded-full border-2 border-gray-600 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-white text-[16px] scale-0 peer-checked:scale-100 transition-transform">check</span>
                        </div>
                    </label>

                     <label className="relative flex items-center gap-4 bg-surface-dark p-4 rounded-2xl border border-white/5 shadow-sm cursor-pointer hover:border-primary/50 transition-all">
                        <input className="peer sr-only" name="payment" type="radio" />
                        <div className="flex items-center justify-center rounded-xl bg-green-900/30 text-green-400 shrink-0 w-14 h-10">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div className="flex flex-col flex-1">
                            <p className="text-base font-bold">Efectivo</p>
                            <p className="text-gray-400 text-xs">Pagar al repartidor</p>
                        </div>
                        <div className="size-6 rounded-full border-2 border-gray-600 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                            <span className="material-symbols-outlined text-white text-[16px] scale-0 peer-checked:scale-100 transition-transform">check</span>
                        </div>
                    </label>
                </div>
            </div>

            {/* Summary */}
            <div className="mt-8 mb-4">
                <div className="bg-surface-dark/50 rounded-2xl p-4 space-y-3">
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Subtotal</span>
                        <span className="text-white font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>Envío</span>
                        <span className="text-white font-medium">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-white/10 w-full my-2"></div>
                    <div className="flex justify-between text-base font-bold text-white">
                        <span>Total</span>
                        <span className="text-primary text-xl">${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Sticky Pay */}
        <div className="absolute bottom-0 w-full bg-background-dark border-t border-white/5 px-5 py-4 pb-8 z-20">
            <button 
                onClick={handlePay}
                className="w-full bg-primary hover:bg-orange-600 text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-orange-500/20 flex items-center justify-between px-6 transition-all active:scale-[0.98]"
            >
                <span>Pagar Ahora</span>
                <div className="bg-white/20 rounded-full px-3 py-1 text-sm">${total.toFixed(2)}</div>
            </button>
        </div>
    </div>
  );
};
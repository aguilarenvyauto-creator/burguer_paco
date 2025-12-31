import React from 'react';
import { useCart } from '../store';
import { USER } from '../constants';
import { BottomNav } from '../components/BottomNav';

export const ProfileScreen: React.FC = () => {
  const { setScreen } = useCart();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24 bg-background-dark text-white">
        <div className="sticky top-0 z-10 flex items-center bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
            <div className="size-12"></div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Mi Perfil</h2>
            <div className="flex w-12 items-center justify-end">
                <button className="flex items-center justify-center rounded-full h-10 w-10 hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">settings</span>
                </button>
            </div>
        </div>

        <div className="flex p-4 flex-col items-center">
            <div className="relative mb-4">
                <div className="bg-center bg-no-repeat bg-cover rounded-full h-32 w-32 border-4 border-surface-dark shadow-xl" style={{ backgroundImage: `url("${USER.avatar}")` }}></div>
                <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 border-4 border-background-dark flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-2xl font-bold leading-tight tracking-[-0.015em] text-center">Hola, {USER.name}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                    <p className="text-[#cbad90] text-sm font-medium leading-normal text-center uppercase tracking-wider">{USER.level}</p>
                </div>
                <div className="mt-2 bg-surface-dark px-4 py-1.5 rounded-full">
                    <p className="text-primary text-sm font-bold leading-normal text-center">{USER.points} Puntos</p>
                </div>
            </div>
        </div>

        <div className="h-4"></div>

        <div>
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Pedir de nuevo</h3>
            <div className="px-4">
                <div className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl bg-surface-dark p-4 shadow-lg border border-white/5">
                    <div className="flex flex-1 flex-col justify-between gap-3">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide">Último pedido</span>
                                <span className="text-gray-400 text-xs">Hoy, 14:30</span>
                            </div>
                            <p className="text-lg font-bold leading-tight">La Paco Clásica</p>
                            <p className="text-[#cbad90] text-sm font-normal leading-normal">Doble carne, queso cheddar, tocino crujiente.</p>
                        </div>
                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white gap-2 text-sm font-bold leading-normal w-full sm:w-fit mt-2 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                            <span className="truncate">Pedir de nuevo</span>
                        </button>
                    </div>
                    <div className="w-full sm:w-32 h-32 bg-center bg-no-repeat bg-cover rounded-xl shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCU5bdldkOYMukzf93dnROCqftPr-ePKtUrJexl8FZh_oKjk1DlVjhN2GuBC3XdoPmcrYw3Ag6vEYmzh7__bOK1yexNQDwlCghA34mUBt9SZf4pbhAXwCmGEaaMapAVwl6iNZ0P1_gPQySEJT2cztHV8c6cn4T3jEgaXSgfjnU2HiDKMj4v2bDhlPtrjxdDk9qzhXRzf8MXtC1K2eul2eM8algIl71p_BbOxtxwryoNQxxMP5pZSJyUMUbvReNVjH_exgyfGLv5_hOf")' }}></div>
                </div>
            </div>
        </div>

        <div className="h-8"></div>

        <div>
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Cuenta</h3>
            <div className="flex flex-col gap-3 px-4">
                {['favorite', 'location_on', 'receipt_long'].map((icon, i) => (
                    <button key={i} className="group flex items-center justify-between p-4 rounded-2xl bg-surface-dark hover:bg-white/5 active:scale-[0.98] transition-all border border-white/5">
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-${i===0 ? 'red' : i===1 ? 'blue' : 'primary'}-500/10 text-${i===0 ? 'red' : i===1 ? 'blue' : 'primary'}-500 ${i===2 ? 'text-primary' : i===1 ? 'text-blue-400' : 'text-red-500'}`}>
                                <span className="material-symbols-outlined fill-current">{icon}</span>
                            </div>
                            <span className="text-white text-base font-medium">{i===0 ? 'Mis Favoritos' : i===1 ? 'Direcciones' : 'Historial de Pedidos'}</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">chevron_right</span>
                    </button>
                ))}
            </div>
        </div>

        <div className="h-8"></div>

        <div>
            <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-3">Preferencias</h3>
            <div className="flex flex-col gap-3 px-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-dark border border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/10 text-yellow-400">
                            <span className="material-symbols-outlined">notifications</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-base font-medium">Estado del pedido</span>
                            <span className="text-gray-400 text-xs">Recibe alertas sobre tu comida</span>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                </div>
            </div>
        </div>

        <div className="p-6 mt-4">
            <button className="w-full py-4 text-center text-red-400 font-bold text-sm uppercase tracking-wider hover:text-red-300 hover:bg-red-500/5 rounded-xl transition-colors">
                Cerrar Sesión
            </button>
            <p className="text-center text-gray-600 text-xs mt-4">Versión 2.4.0 • Burger Paco iOS</p>
        </div>
        
        <BottomNav />
    </div>
  );
};
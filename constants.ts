import { Product, Extra, User } from './types';

export const USER: User = {
  name: 'Paco',
  points: 1250,
  maxPoints: 5000,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAlA7wyMCTSM0RqQPpRoR3mtpdbg5cAf3w-UQrT2xTrC1ce6DQ6zmodq3oLsTX5XfEzOTJd2426DJzCLX_zgEWfXAk8g9H04RIcE5nDBbwgYuwZ0eVHfls_KiAn-nI1ut4NSV-SUKTfu8VX2GjUN6AgygGH4Bek1_1eusyEi4etyKpZRrKcbv0iwcAt2TVz_V8wCtXSrwCcZCPfeZcCZOVd5wwrBLlJnfzDvEmuPBf4E44w7goNWUy6zEX5o3BX0mRvxte0YviXzC5',
  level: 'Paco Fanático'
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'La "Monster Paco"',
    description: 'Doble smash, doble queso, felicidad pura.',
    price: 14.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANyjSFsByWT6YLX1GG58kkY9Cnw7-YpjX2bG1SJ6QksaSoVr8UHPot1FaP4Py46ATyG4kQRao49l6RYoQO-Gfg7W6l141R-UVvDut2VxuLaJzAfxUWLv6TOv__d2CT2-e_B8v8rBo5auppciwYZVJwfnAXzjzf3_SXzEaGigDOofPvJCZBNfkgsYkCz3twlJ8IuRQ4aBq9U_peXXnfhcMTeuRbDmN-O9OSxUMazWZaPuzhVhhj28GIVTT0uVY2yMNqhoIPMcfVJfHy',
    category: 'burgers',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Clásica Paco',
    description: 'Doble carne 100% vacuno, cheddar, salsa secreta.',
    price: 12.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiqC7tZWXuRgguG-0wRnldVqWRPATjCBiqH9d-tr0ENaKGi-FT_HZkRuIW74u3qenT4o-AoKQm3gB03mjCNLv4tOuGM1OBnV55wBCK6bzN0XXbb2Mt54TwbrLvgsiDm-hVQ-0Zl1Nz2QRZ8V8LviOy3PzbePV7sEzLU4o_RcLCtZFNgCWELERw_osG42uEci0qgUFp8wIJaajEuysUdABy9tclgFexmL0TheDNgdAxIs5yviMtHJqxwYlgnFdkwVaz92fwklyEHxn2',
    category: 'burgers',
    isPopular: true
  },
  {
    id: 'p3',
    name: 'BBQ Onion',
    description: 'Aros de cebolla, bacon crujiente, salsa BBQ casera.',
    price: 13.90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOl4vtM46Hm8QAUcuOsn-FERMCFCrmNf_L6WRhdwTRaSDMGObyXBLom1agVjB3pG-lyy1xYLCFkWzCehty_YhZoqaOq0qrSlWPL2-OJTEh9YJpe5BsHw6dviU6kbS_rMtv853NtMtGTkWt_z7MGqx8WaFWpGT87d-PFT4zjAmFOnTniYRLQ-R34w62ZpImUAnh5VHMjR3Lvu7MZWhdo0EI67fB7ccp_zjKAO3juLafVMEozqwdAmt0TPLPSnAUxNNzjqYsB-Irg4YB',
    category: 'burgers',
    isPopular: true
  },
  {
    id: 'p4',
    name: 'Diablo Smash',
    description: 'Jalapeños, salsa picante, queso pepper jack.',
    price: 11.90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi3hqu-no3Kee0k7q4XUTF0KBpBrzp6pLJEgbJyXDp9jOGvkPMMjiZGS9tDAsTpkeoMjGFzgORzvXX93AKCYen9CQO9DG3dzx9HSMmgrZYXfd08U_0Ffh_7CdIIwK3E8JPsG65KnH2GTsGI4XhBEkOMXGmkhS9xtmQrvo2Yo0uPC7h-WZJtzipoYIDygFkAc7EfvNz7wchjiRf90u3Wvg_NH-I4KxbJ-iXF59PoWyk03DXsoSszNHOH1VqPkd85Zwj1HCwuHSDorZU',
    category: 'burgers',
    isPopular: true
  },
  {
    id: 'p5',
    name: 'La Trufada',
    description: 'Mayonesa de trufa negra, champiñones portobello salteados.',
    price: 14.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy2YHbsmxjzhCyhAt_fnFP29Ci8-Sto5Mt4ZznESfmdWEPmIB1WFuR2bp3hpoQawCrPC__v5Z5D1wq-U06hu3XgQzjO3MxmUZmJwoDPoejn11MUlTT4W27iws3Q4eFdIavqNrUkpnPie9jZkJIeBqmY32oM-p0Nhrgnx-7fDqsC5MxsFQ3cdmSH3BUVvfV-tGTYw9DGNpDKarEN7C3uWMgEHOzfKY2kSr5fKRMj03ofzoet1RVUOm0Cw_akOVqiirIggQB7_m6a4rG',
    category: 'burgers'
  },
  {
    id: 's1',
    name: 'Patatas Clásicas',
    description: 'Crujientes y doradas.',
    price: 3.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTHAIN7OYhZAgC-tWgI5gGrnaykrLajPh2ITKJ-CclYWySl37EMYXgthvZfmZItxVhLDWo1a7K_D6O2oA3dFUVxZSApANF5aDkFk3WhXeVyItMx9Lv2CmZ2o8C0yApVt_UWijQSgr83EQlDCjWq7gGqFicZL1jQThdk0k_laeET8suFeIGHwwwTv3tLPjOqtZaMM8EPwZbPKL_xfHm2p0uUlji5DUEoXAyFs4O5HCKm_8jbhxjih881FEuMGw8G5VaeX1M8ELejFO-',
    category: 'sides'
  },
  {
    id: 's2',
    name: 'Cheddar & Bacon',
    description: 'Patatas con queso fundido y bacon.',
    price: 5.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaTpIz5HfQNkH_sXMct-oPKPhbs1kQvXep8KDZUY1bHBggzlKqyfQ3_4kaBNMbmsv5WLv5cUvJuCkGYXgx_nF-UrNPUNCFI_r7C3IjbOwutkHUKjXHUNyArsKhdbWGAoLTB-Vb4OGKs8FBWFWzHPsoifDJKuQFnCdL2oAUpSIg0BCgOc-w3Oop4WnG1rDi1ABk70LtCKAptWkebShZbf9hPwkAYTIKEZl3GdA6VAl96ZTrtxHijcu-ZEwFiXB5JP4x2JhamR9d3r3e',
    category: 'sides'
  },
  {
    id: 's3',
    name: 'Aros de Cebolla',
    description: 'Con salsa BBQ.',
    price: 4.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDckKVJT7EKEM73-NdSCOn8pU8aKO6QnuKDVB2BoZqDxC24TswJPGd2EfbRkrM-aLDqrh8qKsgJpGi2wTKfT04uRfOkpdVBn5iy5NvsmbkjZMZSjbX4InqFo6y8I6068yg0_kp9JtlrxBBJdcG-WymjXqVsuyi9ywxL54ZWcSEihUUyix9Vdad2pU_lUl2lNmgWuLbLxxdcWdq9Q946u-mzJnBBnr_oDi_HBL9-4gfClkQU1gxbIj5qB0OBLDtc3zXg9G3zAVt_VKYK',
    category: 'sides'
  },
  {
    id: 'd1',
    name: 'Cerveza Artesanal',
    description: 'IPA o Lager',
    price: 4.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-cRlancCwnR11uHINr0kpz14CjWR4TjPEh8ioSNKzTtq2mC720F-bYU4SU6m7YWOFDzLpdioASJxUj7jyW6gZAMiNXkdKeb1Gb4CSBs5GuLVhhuyUeexI9oyjjVUyYzPs8ZTPnNfFO2oUCPuzImSQC3BRiarE26u704R45Yl5n53Upl1LJ-ibIb-873yWriFs-tdLtXs0olI78QQapGZwInGsFWrn88MXrDb2jyDzX-QuaYC9gX8savLa0qsLp0CKjwyodqCNVxRe',
    category: 'drinks'
  },
  {
    id: 'd2',
    name: 'Cheesecake',
    description: 'Con frutos rojos',
    price: 6.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxwznYT6RKaYCW3voWYdcghIYNH1qkX8x_hJv1ZDZEUIKjDZOeSiw7Wdei3ecy49YT0h2kCqrPUh8u55_24Dn5P5Exy_TYV9AepxKRrTCUQrRMlaD5xCB5M4JjQU7ZxVfhZtSAHrGK4utz1cRsddaCkBIAVDY-ZEQjPJVR63GYl5LKOAQlkrrL7YjnDZvlLZ22u9JTeU_7kAcWyIqjhWc3MkhPYgOTekdRNy_E7tFg8i6HmbasbymKXRqUGFxP7Su0G0SEjwf_BZ2D',
    category: 'desserts'
  }
];

export const EXTRAS: Extra[] = [
  { id: 'ex1', name: 'Bacon Crujiente', price: 1.50, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFSNKeXtw5rw6pFkCcVbxU4ICsrOuNNIBZXW9GeqqywuqzzVAFLAxwWl8jCz_-wJ5iOzR6oADvmzuBx5Wn7iHJgwmQaIeBthSq69cwPP0Vme-VeedSujgrev1uYpvglUhc93TwZW28JAy7bFJbU-4cxBCqz9lWBUpx1Koaro1HxS2OxvHf-DV97JOA0Rue1jfqlHagl2QZUn54VZh-92U1zQ1QxyAYRasRyg6E80eim1Wc59KQRJYhOnShGqHUVJsgjFDguh5vFyJN' },
  { id: 'ex2', name: 'Queso Cheddar', price: 1.00, color: '#FFC107' },
  { id: 'ex3', name: 'Huevo Frito', price: 1.20, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqyu3r61SWBv1HvNk2piSXMCz7g2bXHepVWuuOxR8AG5lzARLR3neb24u3_4s9C9ZpJWR5a2ACTRNj8HhI2HQGQJGH4QENNFDrw56t0AGFKc4XjYxTS_nauR_UNmA9sdwSUoSq_MS3embVoEsx02GozmPOFBt2wsq4GG7_ObefZAetaJ-LIh9FaEQYB2V0FQQSUtoIOu4F5xYAMUlgDLn2nRs8XGYiuJTf2SNWnNQErDfw78KbaPNoKXnBctz73NGhoL42dcGfJWkr' },
  { id: 'ex4', name: 'Jalapeños', price: 0.80, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbGIQSRn3C9OtNOpxGAl6tnPxXFD5I3T2LGNOoGGa_oYkfZUwhS66Vr8NtD-qmfWOseIxYZpwwtVdKP2V0kWmixZlVtO9aBy7PiZVTJ_dHxFNwNESzt_v0tK7yudHBuDsZZgtjQ3BpLZ4zh8i7iNud4UaAH__QApduxwpAEP4dpINBajktzfMYG_zkdTDzHTMRGKC0vW0sRpZdzrijfmRNmpwH4kEdGg4Qlewd9T3Rog-Yx2jJezJVH3of91C_L_1pIubtQI78NEwZ' }
];

export const CATEGORIES = [
  { id: 'burgers', name: 'Burgers', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD84uLqWChi36hhDfZOwkEswZ7KjvBhf438Sys4Y7T5_AZtYG-YmCwG7qC3XchDdhNW7kNL1x5T7OSG8KyWtPXfhKW9V3Lt_rowa8jeLzBqlJGCYUdtMoSvVflpLW6swptu6JjboE3es2Mget-cvThPXHNEssEbtb6gIMwpX5j_BvQEs7iBAC2SeMmDyET649FJ1pDPzuS89K33-2Jg9cTkGKSwDQm5QVOUUExr8o_jBR-iUk5M6rGMWB7_OzzSBzMunn47yJw7f-WH' },
  { id: 'sides', name: 'Sides', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbnrF55YjYZG9r86Oag2MF7NVFZKY-A8NN7Xfsr9D5Jhh3hi3H0GYVA_QYI_uL-ycOdxOP8x7mXz92jRHq3YdhJ2eoF1Hyn8ea18X1XyiaB-6jkdyfbR0mMlplfE3e5VQM4_cvxLKPscdHknhPcU70gxgGEf9Afb-J7tRuAI_OkmSJGBkqDZ64qpL7AS7035UDJiGiCleQPWmIwcAHnk4OnJ4v1ZDp6KzDLhwvYNJcbRHszZ4TQNllcfziMSk6x9CRjWX_ggEG5APl' },
  { id: 'drinks', name: 'Bebidas', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjwQFWmsoUaLUjmAKf153a8e1VlQHLTkx9LKuytqyQ-4uO-h5DnVmNYRsgn8CzGUinlmRaL1JVd83SFo_3hOo5UZbGz1ifqhPMYXvlBBBYJhZcypgSUP06N58DueqEC6as295Kt1RU-_vZwIwUvEDVjFgRevo6iC-o3HHBnc3DpPmu0txn8XzXQuUOuzKsigKEM3IfiYy0fYuVYZ1_T_QqRlMuqWULR4EBNENJ5XEXG0o7lNzLLsV3wTNR_DP04om6TlVMZmezZzk7' },
  { id: 'shakes', name: 'Shakes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYIIO8yOGCKK6NSVEdk2Oe32YPpUXIvcDJsFjIRQXHGKrul5oAcZH_9qUXg4wOGoWCF3cs24LOlDLTs-Gz73hmjCb96I3kwoFGLWZUlzAs0s7YV-oGxqc1T3-N4V2Ep2HUslzNHuYynDmPw3HfmK6xWUkj4eg5B5FPmcHmujg1QmkbqkY0o6LH4P9ohbwNzu98W_ujHZdoXpwSO7jIFvZM6P_pWtXPVtL9HJwfXEKqVlqK_f34RCHgi9xezcJK9pJ9QV1yDj4TrQc' }
];

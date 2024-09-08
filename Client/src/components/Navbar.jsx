import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='w-full bg-gradient-to-br from-indigo-900 to-pink-500 top-0 z-40 bg-background/80 backdrop-blur-sm'>
      <div className='flex py-3 px-5 md:px-12 h-16 lg:mx-[10vh]'>
        <img 
          className='w-10 h-10 rounded-full'
          src="./src/assets/heart.png" 
          alt="Logo" 
        />
        <h1 className='logoname text-2xl font-semibold py-1 font-serif cursor-pointer'>Bookify</h1>
        <button className='absolute right-16 py-1.5 lg:right-48'>
          <img className='w-7' src="./src/assets/carts.svg" alt="cart" />
          <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
            {cart.length}
          </span>
        </button>
        <button className='absolute right-6 py-1.5 lg:right-32'>
          <img className='w-7' src="./src/assets/profle.svg" alt="profile" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

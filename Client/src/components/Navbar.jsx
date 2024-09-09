import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { ShoppingCart, User, Book } from 'lucide-react'

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='w-full bg-gradient-to-br from-indigo-900 to-pink-500 top-0 z-40 bg-background/80 backdrop-blur-sm'>
      <div className='flex items-center justify-between py-3 px-5 md:px-12 h-16 lg:mx-[10vh]'>
        <div className='flex items-center'>
          <Book className='w-10 h-10 text-white' />
          <h1 className='logoname text-2xl font-semibold ml-2 font-serif cursor-pointer text-white'>Bookify</h1>
        </div>
        <div className='flex items-center'>
          <button className='relative mr-4'>
            <ShoppingCart className='w-7 h-7 text-white' />
            {cart && cart.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                {cart.length}
              </span>
            )}
          </button>
          <button>
            <User className='w-7 h-7 text-white' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
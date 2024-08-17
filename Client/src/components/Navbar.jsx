import React from 'react';

const Navbar = () => {
  
  return (
    <div className='w-full relative border border-black'>
      <div className='flex py-5 px-5 md:px-12 h-20 lg:mx-[10vh]'>
        <img 
          className='w-10 h-10 rounded-full'
          src="./src/assets/heart.png" 
          alt="Logo" 
        />
        <h1 className='logoname text-2xl font-semibold py-1 font-serif cursor-pointer'>Bookify</h1>
        <button className='absolute right-16 py-1.5 lg:right-48'><img className='w-7' src="./src/assets/carts.svg" alt="" /></button>
        <b48ton className='absolute right-6 py-1.5 lg:right-32'><img className='w-7' src="./src/assets/profle.svg" alt="" /></b48ton>
      </div>
    </div>
  );
}

export default Navbar;

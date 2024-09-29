import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Options = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://bookify269.vercel.app/api/bookopt'); // Ensure correct protocol
        setBooks(response.data); 
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className='w-full py-6'>
      <h1 className='text-5xl mx-12 mt-6 font-mono font-bold text-center mb-8'>Our Top Categories</h1>
      <div className='flex flex-col items-center space-y-6'>
        <div className='flex justify-center w-full'>
          {["Fiction", "Fantasy", "Mystery"].map((category, index) => (
            <span key={index} className='bg-white shadow-lg rounded-md px-4 mx-4 flex justify-between'>{category}</span>
          ))}
        </div>

        <div className='flex justify-center space-x-6 w-full'>
          <div className='bg-white shadow-lg rounded-md px-4 py-2'>
            <span>Non-Fiction</span>
          </div>
          <div className='bg-white shadow-lg rounded-md px-4 py-2'>
            <span>Romance</span>
          </div>
        </div>
      </div>
      <hr className='h-1 mx-8 mt-12 mb-8 rounded-full bg-zinc-400' />
      <div className='md:mx-16'>
        <div className='flex'>
          <h1 className='text-3xl ml-8 font-serif font-bold lg:mx-14'>Selected for you</h1>
          <h1 className='ml-auto mr-6 sm:mr-8 lg:mr-9 p-1 right-2 text-zinc-500'>See All <span className=''>{">"}</span></h1>
        </div>
        <div className='cards m-6 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {books.map(book => (
            <div key={book.id} className='shadow-lg rounded-md p-4 m-2 lg:p-6 lg:mx-4 flex md:block bg-[#f4f8f9]'>
              <img src={book.image} alt={book.name} className='md:mx-auto w-[7rem] sm:w-[8rem] md:w-[13rem] lg:w-[16rem] h-auto lg:max-h-[22rem] object-cover rounded-md' />
              <div className='ml-4'>
                <h2 className='text-xl sm:text-2xl font-semibold'>{book.name}</h2>
                <p className='text-gray-600'>{book.author}</p>
                <p className='font-medium text-zinc-800'>{book.price}</p>
                <button className='w-full px-10 sm:px-14 mt-8 sm:mt-12 md:mt-3 lg:mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;

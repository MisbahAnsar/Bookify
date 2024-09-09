import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';

const Choice = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bookchoices');
        setBooks(response.data); // Assuming setBooks is your state setter for books
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);
  

  return (
    <div className='w-full'>
      <div className='md:mx-16'>
        <div className='flex pt-20'>
          <h1 className='text-3xl ml-8 font-serif font-bold tracking-tighter lg:mx-14'>Books You Might Like</h1>
          <h1 className='ml-auto mr-5 sm:mr-8 lg:mr-9 p-1 text-zinc-500'>See All <span className=''>{">"}</span></h1>
        </div>
        <div className='cards m-6 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {books.map(book => (
            <div key={book.id} className='shadow-lg rounded-md p-4 m-2 lg:p-6 lg:mx-4 flex md:block bg-[#f4f8f9]'>
              <img src={book.image} alt={book.name} className='md:mx-auto w-[7rem] sm:w-[8rem] md:w-[13rem] lg:w-[16rem] h-auto lg:max-h-[22rem] object-cover rounded-md' />
              <div className='ml-4'>
                <h2 className='text-xl sm:text-2xl font-semibold'>{book.name}</h2>
                <p className='text-gray-600'>{book.author}</p>
                <p className='font-medium text-zinc-800'>{book.price}</p>
                <button
                  className='w-full px-10 sm:px-14 mt-8 sm:mt-12 md:mt-3 lg:mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
                  onClick={() => addToCart(book)}
                >
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

export default Choice;

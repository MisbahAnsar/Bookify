import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(0); // Set the first review as open by default

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://bookify269.vercel.app/api/reviews');
        // const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data); // Assuming setBooks is your state setter for books
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleReadClick = (index) => {
    setSelectedReview(selectedReview === index ? null : index);
  };

  return (
    <div className='w-full review'>
      <div>
        <h1 className='mx-9 text-3xl text-zinc-900 font-mono font-bold tracking-tighter md:mx-10 lg:mx-32'>Reader&apos;s reviews</h1>
        <hr className='h-[0.2vh] mt-9 rounded-full bg-zinc-400' />

        {reviews.map((review, index) => (
          <div key={index} className='mt-3'>
            <div className='flex mx-9 justify-between items-center md:mx-10 lg:mx-32'>
              <h1 className='underline text-xl'>{review.name}</h1>
              <button 
                className="text-xl text-zinc-500 cursor-pointer relative transition-all duration-500 ease-in-out group"
                onClick={() => handleReadClick(index)}>
                Read
                <span 
                className={`absolute left-0 bottom-[-3px] h-[0.2vh] bg-zinc-900 rounded-full transition-all duration-500 ease-in-out
                group-hover:w-full w-0`}>
                </span>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${selectedReview === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className='mt-3 mb-3 mx-9 md:mx-10 lg:mx-32'>
                <p className='text-lg'>{review.review}</p>
                <img src={review.image} alt={review.imageDescription} className='mt-3 w-32 h-48' />
                <p className='text-13px text-gray-700 mt-1 leading-5 md:mr-32 lg:mr-40'>{review.imageDescription}</p>
              </div>
            </div>
            <hr className='h-[0.2vh] mt-3 rounded-full bg-zinc-400' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;

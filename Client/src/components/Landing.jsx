import React, { useEffect, useState } from 'react';

const Landing = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Correct URL with protocol and path to your Express API
                const response = await fetch('http://localhost:5000/api/books');
                const data = await response.json();

                // Assuming the API returns an array of books, directly set it to state
                setBooks(data);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchBooks();
    }, []);

    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    if (books.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='bg-[#f4f8f9] pt-1'>
                <h2 className='border-2 border-zinc-400 p-2 w-32 mx-8 md:mx-16 lg:mx-32 my-8 rounded-sm sm:mt-12 md:mt-20 lg:mt-32'>Trending Now</h2>
            {books.map((book, index) => (
                <div key={index} className='mx-8 flex flex-col sm:flex-row mb-12 md:mx-16 lg:mx-32'>
                    <div className='flex-1'>
                        <a className='font-bold font-serif text-3xl sm:text-4xl lg:text-5xl'>{book.title}</a>
                        <p className='mt-6 text-zinc-600 font-serif lg:mr-32'>
                            {truncateDescription(book.description)} {/* Adjust maxLength as needed */}
                        </p>
                        <button className='bg-purple-400 rounded-sm my-5 text-xl px-4 py-3 text-zinc-100'>View this book</button>
                    </div>
                    <div className='flex-1 sm:ml-6 lg:ml-32 sm:mt-[-1vh] md:mt-[-5vh] lg:mt-[-8vh] mt-6'>
                        <h1 className='hidden lg:block font-normal text-zinc-600 text-xl'>
                            AUTOGRAPHED
                            <br />BOOKS + 30%
                            <br />
                            DISCOUNT
                        </h1>
                        <img
                            src={book.image}
                            alt={`Book cover`}
                            className='w-48 h-88 pb-10 rounded-md sm:w-52 sm:mt-[-5vh] md:mt-[-2vh] lg:mt-[-10.5vh] lg:mr-24 sm:h-80 md:w-60 md:h-96 lg:w-80 lg:h-[28rem] xl:w-80 xl:h-[30rem] mx-auto cursor-pointer'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Landing;

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Landing = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <main>
      <section className=" relative w-full bg-gradient-to-br from-indigo-900 to-pink-500 py-48 md:py-48 lg:py-48 h-screen">
        <div className="flex flex-col items-center text-center gap-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
            Discover Your Next Great Read
          </h1>
          <p className="max-w-xl text-center text-lg text-white/90 md:text-xl">
            Explore our curated collection of books across a wide range of genres and find your perfect literary
            companion.
          </p>
          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Search books..."
              className="max-w-md flex-1 rounded-md bg-white/20 px-4 py-2 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              defaultValue={searchQuery}
            />
            <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-purple-600 shadow transition-colors hover:bg-white/90 focus:outline-none focus:ring-1 focus:ring-white disabled:pointer-events-none disabled:opacity-50">
              Search
            </button>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
          <img src="/placeholder.svg" alt="Hero Background" className="h-full w-full object-cover" />
        </div>
      </section>
    </main>
  );
};

export default Landing;
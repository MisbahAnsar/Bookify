"use client"

import React from 'react';

export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
        <div className="backdrop-blur-md bg-transparent">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" className="text-white text-xl font-bold">BOOKIFY</a>
            <div className="space-x-4">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">Categories</a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
      <div className="absolute -top-64 -left-64 h-[700px] w-[700px] rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
      
      <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
      
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl mb-6">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg text-slate-300 md:text-xl mb-8">
            Explore our curated collection of books across a wide range of genres and find your perfect literary
            companion.
          </p>
          
        </div>
      </section>
    </main>
  )
}
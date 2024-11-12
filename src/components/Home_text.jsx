import React from 'react';
import { Link } from 'react-router-dom';

const Home_text = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-10 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-300 to-blue-500 px-6 py-12 text-center shadow-2xl sm:rounded-3xl sm:px-16 text-white">
        <h2 className="mx-auto text-3xl font-bold tracking-tight transition-transform transform hover:scale-105">Unveiling the World's Hidden Wonders</h2>
        <p className="mx-auto mt-6 text-lg leading-7 transition-transform transform hover:scale-105">Voyage isn't your typical travel agency; we're your portal to boundless adventures. Our mission is to turn your journey into an unforgettable odyssey. With years of experience, we've emerged as your trusted partner in uncovering the world's hidden treasures. Our devoted team of experts ensures your trips run seamlessly, allowing you to focus on crafting everlasting memories. Your journey is our passion, and we're here to make it extraordinary. Join us on an exploration of a lifetime.</p>
        <Link to="/destination" target='_blank' className="inline-block mt-8 px-6 py-3 font-semibold bg-blue-600 text-white rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:bg-blue-800 hover:text-white hover-shadow-lg">Explore Now</Link>
      </div>
    </div>
  );
};

export default Home_text;

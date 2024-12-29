import React from 'react';
import BlogPage from './Blog/page';
import Image from 'next/image';
const Home = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image 
          src="/bg.png" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          className="absolute inset-0"
        />
      </div>
      <div className="relative w-full h-screen flex items-center justify-center z-10">
      <div className="absolute inset-0 p-6 flex items-center justify-center">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 text-center border-[1px] border-gray-300 bg-gray-200 opacity-90 p-6 rounded-lg shadow-lg">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-extrabold text-black mb-4 tracking-wide transition-transform duration-500 ease-in-out hover:scale-105">
              WELCOME TO BLOGSPHERE
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mb-4 leading-relaxed font-light transition-transform duration-500 ease-in-out hover:scale-105">
              Dive into a world of insightful articles, tips, and stories.and explore a range of topics curated to spark your interest and expand your knowledge.
            </p>
            <a
  href="/Blog"
  className="relative inline-block bg-transparent border-2 border-black text-black px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold overflow-hidden transition-all duration-500 ease-in-out group shadow-lg"
>
  <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out shadow-white"></span>
  <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
    Read Blogs
  </span>
</a>

          </div>
          </div>
</div>


      <section id="blog-section" className="py-16 bg-gray-100 relative z-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <BlogPage />
        </div>
      </section>
    </div>
  );
};

export default Home;

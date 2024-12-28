import React from 'react';
import Image from 'next/image';  
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white p-4 sm:p-12 pt-24">
      <main className="flex-1 flex flex-col items-center sm:px-12 sm:py-16">
        <div className="text-center sm:text-left mb-8 sm:mb-12 max-w-3xl px-4 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold font-serif text-center text-black mb-6">
            About BlogSphere
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center mb-4 sm:mb-6 leading-tight font-light font-">
            Welcome to BlogSphere — your go-to destination for all things blogging.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
            BlogSphere is a space dedicated to reading insightful and engaging blog posts on various topics. Whether you&apos;re looking to learn, get inspired, or stay updated, you&apos;ll find valuable content here.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
            Our blog covers a wide range of subjects to keep you informed and inspired:
          </p>
          <ul className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 list-disc pl-6">
            <li>Technology: Stay updated with the latest trends in tech and software.</li>
            <li>Design: Explore creative design tips, techniques, and trends.</li>
            <li>Creativity: Unlock new ideas and inspiration for your personal and professional projects.</li>
            <li>Content Marketing: Learn how to create content that engages and converts.</li>
            <li>SEO: Get tips on how to rank better and drive traffic to your site.</li>
            <li>Social Media: Master the art of social media strategy and growth.</li>
            <li>More: From blogging tips to personal growth, we cover a broad range of topics!</li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 leading-tight md:leading-relaxed font-light">
            Whether you&apos;re just starting your blogging journey or you&apos;re a seasoned pro, BlogSphere is here to help you level up your content and stay inspired.
          </p>
          <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto h-64 sm:h-72 lg:h-96">
            <Image
              src="/about.png"
              alt="BlogSphere Icons"
              layout="fill"  
              objectFit="cover"  
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;

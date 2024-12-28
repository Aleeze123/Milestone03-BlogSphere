"use client";
import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with email: ', email);
    setEmail('');
  };
  return (
    <footer className="bg-white py-12 text-black border-t-2 border-gray-200 font-sans relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="flex gap-4 mb-4 lg:mb-0">
            <a href="https://x.com/aleeze1710?s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.youtube.com/@alizey_a" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-pink-600 hover:text-pink-800 transition duration-300 ease-in-out" />
            </a>
          </div>
          <div className="flex justify-end items-center">
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-lg w-40 sm:w-48 md:w-64 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-lg  text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="/" className="text-sm sm:text-base text-gray-600 hover:text-gray-800">Home</a>
          <a href="/About" className="text-sm sm:text-base text-gray-600 hover:text-gray-800">About</a>
          <a href="/Blog" className="text-sm sm:text-base text-gray-600 hover:text-gray-800">Blog</a>
          <a href="/Contact" className="text-sm sm:text-base text-gray-600 hover:text-gray-800">Contact</a>
        </div>
        <div className="text-left text-sm sm:text-base text-gray-600 mb-8">
          <p>
            <strong>Privacy Policy:</strong> We value your privacy and are committed to protecting your personal information. Read our Privacy Policy to learn more about how we handle your data.
          </p>
          <p className="mt-2">
            <strong>Terms of Service:</strong> By using our site, you agree to our terms of service. Please review our Terms of Service for more information.
          </p>
        </div>
        <div className="text-right text-sm sm:text-base text-gray-600 mb-8">
          <p>
            Contact Us: <br />
            Email: support@blogsphere.com <br />
            Phone: +123 456 7890 <br />
          </p>
        </div>
        <div className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
          &copy; 2024 BlogSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;

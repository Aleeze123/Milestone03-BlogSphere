"use client";
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

  return (
    <div className="contact-form-widget mx-auto px-6 py-10 bg-white max-w-4xl mt-24 ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-center text-gray-800 mb-8">
        Get in Touch
      </h1>
      <form name="contact-form" className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative flex-1">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <FaUser className="text-gray-500" size={20} />
            </div>
            <input
              className="w-full h-12 pl-12 pr-4 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
            />
          </div>
          <div className="relative flex-1">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
              <FaEnvelope className="text-gray-500" size={20} />
            </div>
            <input
              className="w-full h-12 pl-12 pr-4 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="E-mail Address"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <FaPaperPlane className="text-gray-500" size={20} />
          </div>
          <input
            className="w-full h-12 pl-12 pr-4 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            placeholder="Subject"
          />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            
          </div>
          <textarea
            className="w-full h-32 pl-12 pr-4 pt-3 text-lg font-medium text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300 resize-none"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="relative inline-flex items-center justify-center w-36 h-10 sm:w-40 sm:h-12 md:w-48 md:h-14 text-lg font-semibold text-black border-2 border-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black transition duration-300 ease-in-out hover:bg-black hover:text-white"
          >
            SEND
          </button>
        </div>
      </form>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 text-center">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-black" size={20} />
            <p className="text-lg text-gray-800">Karachi, Pakistan</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-black" size={20} />
            <p className="text-lg text-gray-800">Phone: +123 456 7890</p>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-black" size={20} />
            <p className="text-lg text-gray-800">Email: support@blogsphere.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

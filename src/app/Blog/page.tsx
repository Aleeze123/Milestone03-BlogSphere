'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa';
interface Post {
  id: string;
  title: string;
  image: string;
  likes: string;  
  comments: number;  
}
const posts: Post[] = [
  {
    id: '1',
    title: 'The AI Revolution\nEnhancing Our World',
    image: '/blog1.png',
    likes: '124k',
    comments: 335,
  },
  {
    id: '2',
    title: 'Global AI Revolution\nTransforming Industries',
    image: '/blog2.png',
    likes: '200k',
    comments: 645,
  },
  {
    id: '3',
    title: 'Next.js\nBuilding Faster Websites Efficiently',
    image: '/nextjs.png',
    likes: '150k',
    comments: 955,
  },
  {
    id: '4',
    title: 'Innovative Technologies\nShaping Our Future',
    image: '/bg.jpg',
    likes: '10k',
    comments: 762,
  },
  {
    id: '5',
    title: 'Artificial Intelligence\nAdvancing Modern Solutions',
    image: '/ai.png',
    likes: '310k',
    comments: 512,
  },
  {
    id: '6',
    title: 'AI Powered\nCybersecurity Solutions',
    image: '/cybersecurity.png',
    likes: '19k',
    comments: 660,
  },
];
const BlogPage = () => {
  const [visiblePosts] = useState(6);
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-12 pt-24 md:pt-32">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold font-serif text-center text-black mb-6">
       BLOGS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, visiblePosts).map((post) => (
          <div
            key={post.id}
            className="shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mx-auto w-full"
          >
            <Link href={`/Blog/${post.id}`} legacyBehavior>
              <a className="block w-full h-64 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 hover:opacity-80"
                />
              </a>
            </Link>
            <div className="p-4 bg-gray-100">
              <Link href={`/Blog/${post.id}`} legacyBehavior>
                <a>
                  <h2 className="text-xl font-mono text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <div className="flex justify-between items-center text-gray-700 text-sm">
                <div className="flex items-center">
                  <Link href={`/Blog/${post.id}`} legacyBehavior>
                    <a className="flex items-center">
                      <FaHeart className="mr-1 text-red-500 hover:text-red-700 transition-colors duration-300" />
                      {post.likes}
                    </a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Link href={`/Blog/${post.id}`} legacyBehavior>
                    <a className="flex items-center">
                      <FaRegCommentDots className="mr-1 text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                      {post.comments}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogPage;

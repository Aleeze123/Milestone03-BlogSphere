'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaHeart, FaRegCommentDots, FaTrash } from 'react-icons/fa'; 
import Image from 'next/image';
const posts = [
  {
    id: '1',
    title: 'The AI Revolution\nEnhancing Our World',
    image: '/blog1.png',
    likes: '124k',
    comments: 335,
    content: [
      'AI revolution is transforming our world, changing industries, creating new opportunities, and improving lives in ways we never imagined before.',
      'As AI technology continues to grow, it is expected to impact even more aspects of our lives, from healthcare to finance, and even our daily routines.',
    ],
  },
  {
    id: '2',
    title: 'Global AI Revolution\nTransforming Industries',
    image: '/blog2.png',
    likes: '200k',
    comments: 645,
    content: [
      'Global AI adoption is creating breakthroughs in sectors like healthcare, finance, transportation, and education, pushing the boundaries of what’s possible.',
      'AI-powered solutions are enabling industries to innovate, making processes more efficient and opening doors to new levels of creativity and productivity.',
    ],
  },
  {
    id: '3',
    title: 'Next.js\nBuilding Faster Websites Efficiently',
    image: '/nextjs.png',
    likes: '150k',
    comments: 955,
    content: [
      'Next.js is a powerful framework for building fast and scalable websites, offering features like server-side rendering, static site generation, and more.',
      'With its performance optimization and seamless development experience, Next.js is becoming the go-to framework for building modern web applications.',
    ],
  },
  {
    id: '4',
    title: 'Innovative Technologies\nShaping Our Future',
    image: '/bg.jpg',
    likes: '10k',
    comments: 762,
    content: [
      'Innovative technologies like blockchain, quantum computing, and AI are reshaping industries and bringing about changes that will define the future.',
      'These technologies are unlocking new possibilities in data security, computational power, and automation, paving the way for more efficient and sustainable solutions.',
    ],
  },
  {
    id: '5',
    title: 'Artificial Intelligence\nAdvancing Modern Solutions',
    image: '/ai.png',
    likes: '310k',
    comments: 512,
    content: [
      'AI is making huge strides in industries like robotics, machine learning, and data analysis, driving advancements in automation, healthcare, and beyond.',
      'From self-driving cars to personalized medical treatment, AI is revolutionizing the way we approach complex problems and create innovative solutions.',
    ],
  },
  {
    id: '6',
    title: 'AI Powered\nCybersecurity Solutions',
    image: '/cybersecurity.png',
    likes: '19k',
    comments: 660,
    content: [
      'AI-powered cybersecurity solutions are increasingly being used to detect and prevent threats in real time, offering a new layer of protection for users.',
      'With AI’s ability to analyze vast amounts of data, it can identify patterns and anomalies, providing a higher level of security for businesses and individuals alike.',
    ],
  },
];
const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [id]);
  const addComment = () => {
    if (name.trim() && newComment.trim()) {
      const updatedComments = [
        ...comments,
        { name: name.trim(), comment: newComment.trim() },
      ];
      setComments(updatedComments);
      setName('');
      setNewComment('');
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    }
  };
  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
  };
  if (!post) {
    return <div className="text-center py-10 text-lg text-red-500">Post not found</div>;
  }
  return (
    <div className="min-h-screen bg-white p-6 sm:p-12 pt-16 md:pt-24">
      <div className="container mx-auto mt-8 md:mt-16 text-center">
        <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-64 sm:h-72 lg:h-96 mx-auto">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex justify-center mt-4 space-x-4 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaHeart className="text-red-500 hover:text-red-700 transition-colors duration-300" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegCommentDots className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />
            <span>{post.comments}</span>
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-gray-800 my-4 text-center">
          {post.title}
        </h1>
        <div className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 font-serif text-center">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg mt-8 mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="border border-gray-300 p-3 w-full mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addComment}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
            >
              Add Comment
            </button>
          </div>
          <div>
            {comments.length === 0 ? (
              <div>No comments yet🚫</div>
            ) : (
              comments.map((commentObj, index) => (
                <div key={index} className="border-t border-gray-200 pt-2 flex items-center justify-between">
                  <p className="text-gray-700">
                    <strong>{commentObj.name}:</strong> {commentObj.comment}
                  </p>
                  <div className="relative">
                  <button
                        onClick={() => deleteComment(index)}
                        className="text-red-600 px-4 py-2 text-sm hover:bg-red-100 rounded-md"
                      >
                        <FaTrash className="" />
                        Delete
                      </button>
                    <div className="absolute right-0 top-0 mt-2 bg-white shadow-lg border rounded-md">  
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostPage;

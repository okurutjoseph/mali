'use client';

import { useState } from 'react';
import Link from 'next/link';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link 
          href="/admin/posts/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Post
        </Link>
      </div>

      {/* Posts List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts found. Add your first blog post!</p>
          ) : (
            <div className="grid gap-4">
              {/* Post items will go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage; 
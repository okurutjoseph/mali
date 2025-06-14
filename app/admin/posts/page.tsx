'use client';

import Link from 'next/link';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const PostsPage = () => {
  const posts = useQuery(api.posts.list) || [];
  const togglePublish = useMutation(api.posts.togglePublish);

  const handleTogglePublish = async (postId: any, currentStatus: boolean) => {
    try {
      await togglePublish({
        id: postId,
        published: !currentStatus
      });
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <div className="flex gap-3">
          <Link 
            href="/admin/posts/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Add New Post
          </Link>
          <Link 
            href="/admin/posts/categories"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Categories
          </Link>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts found. Add your first blog post!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {post.imageUrl && (
                  <div className="aspect-video w-full">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <button
                      onClick={() => handleTogglePublish(post._id, post.published)}
                      className={`ml-2 px-2 py-1 rounded text-sm ${
                        post.published 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      } cursor-pointer`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      By {post.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      Created: {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => {/* TODO: Implement edit */}}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {/* TODO: Implement delete */}}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
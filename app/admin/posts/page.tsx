'use client';

import Link from 'next/link';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PostsPage = () => {
  const router = useRouter();
  const posts = useQuery(api.posts.list) || [];
  const togglePublish = useMutation(api.posts.togglePublish);
  const deletePost = useMutation(api.posts.remove);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTogglePublish = async (postId: any, currentStatus: boolean) => {
    try {
      await togglePublish({
        id: postId,
        published: !currentStatus
      });
    } catch (error) {
      console.error('Error toggling publish status:', error);
      alert('Failed to update publish status. Please try again.');
    }
  };

  const handleDelete = async (postId: any) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      setIsDeleting(true);
      try {
        await deletePost({ id: postId });
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleEdit = (postId: string) => {
    router.push(`/admin/posts/edit/${postId}`);
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
                  <div className="aspect-video w-full relative group">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => handleEdit(post._id)}
                        className="bg-white text-gray-800 px-3 py-1 rounded-full mx-2 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        Edit Image
                      </button>
                    </div>
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
                      } cursor-pointer disabled:opacity-50`}
                      disabled={isDeleting}
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
                      onClick={() => handleEdit(post._id)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer disabled:opacity-50"
                      disabled={isDeleting}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer disabled:opacity-50"
                      disabled={isDeleting}
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
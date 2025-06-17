'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import UploadButton from '@/app/components/UploadButton';

const AddPostPage = () => {
  const router = useRouter();
  const createPost = useMutation(api.posts.create);
  const categories = useQuery(api.postCategories.list) || [];

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    imageUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createPost({
        title: formData.title,
        content: formData.content,
        imageUrl: formData.imageUrl,
        excerpt: formData.excerpt,
        author: 'Admin',
        categories: [formData.category],
        published: true
      });
      
      router.push('/admin/posts');
      router.refresh();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Post</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Featured Image</label>
          <UploadButton
            onUploadComplete={(url) => {
              setFormData(prev => ({ ...prev, imageUrl: url }));
            }}
            onUploadError={(error) => {
              console.error('Upload error:', error);
            }}
          />
          {formData.imageUrl && (
            <div className="mt-2">
              <img src={formData.imageUrl} alt="Preview" className="h-32 object-cover rounded" />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="excerpt" className="block text-sm font-medium">Excerpt</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            rows={2}
            placeholder="Brief summary of the post (will be shown in blog cards)"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="content" className="block text-sm font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage; 
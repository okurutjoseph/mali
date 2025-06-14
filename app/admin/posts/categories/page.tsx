'use client';

import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

interface Category {
  _id: Id<"postCategories">;
  _creationTime: number;
  name: string;
  createdAt: number;
}

const PostCategoriesPage = () => {
  const categories = useQuery(api.postCategories.list) || [];
  const createCategory = useMutation(api.postCategories.create);
  const updateCategory = useMutation(api.postCategories.update);
  const deleteCategory = useMutation(api.postCategories.remove);

  const [isEditing, setIsEditing] = useState<Id<"postCategories"> | null>(null);
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCategory(formData);
      setFormData({ name: '' });
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleUpdate = async (categoryId: Id<"postCategories">) => {
    try {
      await updateCategory({
        id: categoryId,
        ...formData,
      });
      setIsEditing(null);
      setFormData({ name: '' });
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDelete = async (categoryId: Id<"postCategories">) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteCategory({ id: categoryId });
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  const startEditing = (category: Category) => {
    setIsEditing(category._id);
    setFormData({
      name: category.name,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Post Categories</h1>

      {/* Add/Edit Form */}
      <form onSubmit={isEditing ? (e) => { e.preventDefault(); handleUpdate(isEditing); } : handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end space-x-3">
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(null);
                  setFormData({ name: '' });
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
            >
              {isEditing ? 'Update Category' : 'Add Category'}
            </button>
          </div>
        </div>
      </form>

      {/* Categories List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {categories.map((category) => (
            <li key={category._id} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => startEditing(category)}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="text-red-600 hover:text-red-800 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostCategoriesPage;
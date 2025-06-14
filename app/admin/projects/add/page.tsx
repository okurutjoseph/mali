'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import UploadButton from '@/app/components/UploadButton';

const AddProjectPage = () => {
  const router = useRouter();
  const createProject = useMutation(api.projects.create);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    imageUrl: '',
    clientName: '', // Required by schema
    completionDate: new Date().getTime(), // Required by schema
    technologies: [], // Required by schema
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await createProject({
        ...formData,
        technologies: ['Default'], // Providing a default value as required by schema
      });
      
      router.push('/admin/projects');
      router.refresh();
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      
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
          <label htmlFor="title" className="block text-sm font-medium">Project Name</label>
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
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="clientName" className="block text-sm font-medium">Client Name</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectPage; 
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import React from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const EditTestimonialPage = ({ params }: PageProps) => {
  const { id } = React.use(params);
  const router = useRouter();
  const testimonialId = id as Id<"testimonials">;
  const testimonial = useQuery(api.testimonials.list)?.find(t => t._id === testimonialId);
  const updateTestimonial = useMutation(api.testimonials.update);

  const [formData, setFormData] = useState({
    clientName: '',
    company: '',
    testimonial: '',
    rating: 5,
    isActive: true,
  });

  useEffect(() => {
    if (testimonial) {
      setFormData({
        clientName: testimonial.clientName,
        company: testimonial.company,
        testimonial: testimonial.testimonial,
        rating: testimonial.rating,
        isActive: testimonial.isActive,
      });
    }
  }, [testimonial]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await updateTestimonial({
        id: testimonialId,
        clientName: formData.clientName,
        company: formData.company,
        testimonial: formData.testimonial,
        rating: formData.rating,
        isActive: formData.isActive,
      });
      
      router.push('/admin/testimonials');
      router.refresh();
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  if (!testimonial) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Testimonial</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="rating" className="block text-sm font-medium">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num} Stars</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="testimonial" className="block text-sm font-medium">Testimonial</label>
          <textarea
            id="testimonial"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
              className="mr-2"
            />
            <span className="text-sm font-medium">Active</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Update Testimonial
        </button>
      </form>
    </div>
  );
};

export default EditTestimonialPage; 
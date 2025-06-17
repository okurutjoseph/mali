'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const AddTestimonialPage = () => {
  const router = useRouter();
  const createTestimonial = useMutation(api.testimonials.create);

  const [formData, setFormData] = useState({
    clientName: '',
    company: '',
    testimonial: '',
    rating: 5,
    isActive: true,
  });

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
      await createTestimonial({
        clientName: formData.clientName,
        company: formData.company,
        testimonial: formData.testimonial,
        rating: formData.rating,
        isActive: formData.isActive,
      });
      
      router.push('/admin/testimonials');
      router.refresh();
    } catch (error) {
      console.error('Error creating testimonial:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Testimonial</h1>
      
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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonialPage; 
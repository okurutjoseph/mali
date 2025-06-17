'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

interface Testimonial {
  _id: Id<"testimonials">;
  clientName: string;
  company: string;
  testimonial: string;
  rating: number;
  isActive: boolean;
  createdAt: number;
}

const TestimonialsPage = () => {
  const testimonials = useQuery(api.testimonials.list) || [];
  const deleteTestimonial = useMutation(api.testimonials.remove);
  const updateTestimonial = useMutation(api.testimonials.update);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: Id<"testimonials">) => {
    if (isDeleting) return;
    
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setIsDeleting(true);
      try {
        await deleteTestimonial({ id });
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleToggleActive = async (testimonial: Testimonial) => {
    try {
      await updateTestimonial({
        id: testimonial._id,
        clientName: testimonial.clientName,
        company: testimonial.company,
        testimonial: testimonial.testimonial,
        rating: testimonial.rating,
        isActive: !testimonial.isActive,
      });
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials</h1>
        <Link 
          href="/admin/testimonials/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Testimonial
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="grid gap-6 p-6">
          {testimonials.length === 0 ? (
            <p className="text-gray-500 text-center">No testimonials found. Add your first testimonial!</p>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial._id} className="border rounded-lg p-6 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.clientName}</h3>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleActive(testimonial)}
                      className={`px-3 py-1 rounded text-sm ${
                        testimonial.isActive 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                      }`}
                    >
                      {testimonial.isActive ? 'Active' : 'Inactive'}
                    </button>
                    <Link
                      href={`/admin/testimonials/edit/${testimonial._id}`}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm hover:bg-blue-200"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm hover:bg-red-200"
                      disabled={isDeleting}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="flex mb-2">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700">{testimonial.testimonial}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Added on {new Date(testimonial.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 
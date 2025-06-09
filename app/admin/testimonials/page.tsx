'use client';

import { useQuery, useMutation } from "convex/react";
import Link from 'next/link';
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Image from 'next/image';

export default function AdminTestimonials() {
  const testimonials = useQuery(api.testimonials.getTestimonials);
  const deleteTestimonial = useMutation(api.testimonials.deleteTestimonial);

  const handleDelete = async (id: string) => {
    await deleteTestimonial({ id: id as unknown as Id<"testimonials"> });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <Link href="/admin/testimonials/add-testimonials">
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded-full transition">
            Add New Testimonial
          </button>
        </Link>
      </div>
      {testimonials === undefined ? (
        <div>Loading...</div>
      ) : testimonials.length === 0 ? (
        <div>No testimonials found. Add some testimonials to get started.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="relative w-full h-40 mb-4">
                {testimonial.companyLogoUrl ? (
                  <img 
                    src={testimonial.companyLogoUrl} 
                    alt={`${testimonial.name}'s company logo`} 
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    No Logo
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mb-2">{testimonial.role}</p>
              <p className="text-sm text-gray-500 text-center mb-4 line-clamp-3">{testimonial.description}</p>
              <button
                onClick={() => handleDelete(testimonial._id)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
'use client';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const AdminDashboard = () => {
  // Fetch clients and testimonials data from Convex
  const clients = useQuery(api.clients.getClients) || [];
  const testimonials = useQuery(api.testimonials.getTestimonials) || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stats Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Clients</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{clients.length}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Testimonials</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">{testimonials.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
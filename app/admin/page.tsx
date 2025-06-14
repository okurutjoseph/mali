'use client';

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface Project {
  _id: Id<"projects">;
  _creationTime: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  clientName: string;
  completionDate: number;
  createdAt: number;
}

interface Post {
  _id: Id<"posts">;
  _creationTime: number;
  title: string;
  content: string;
  imageUrl: string;
  excerpt: string;
  author: string;
  categories: string[];
  published: boolean;
  createdAt: number;
  updatedAt: number;
}

const AdminDashboard = () => {
  const projects = useQuery(api.projects.list) || [];
  const posts = useQuery(api.posts.list) || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Projects Stats */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <p className="text-3xl font-bold">{projects.length}</p>
          <p className="text-gray-600 mt-1">Total Projects</p>
        </div>

        {/* Posts Stats */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
          <p className="text-3xl font-bold">{posts.length}</p>
          <p className="text-gray-600 mt-1">Total Posts</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[...projects, ...posts]
              .sort((a, b) => b.createdAt - a.createdAt)
              .slice(0, 5)
              .map((item) => {
                const isPost = 'content' in item;
                return (
                  <div key={item._id} className="p-4">
                    <p className="font-medium">
                      {isPost ? `New Post: ${item.title}` : `New Project: ${item.title}`}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
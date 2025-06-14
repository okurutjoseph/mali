'use client';

import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const ProjectsPage = () => {
  const projects = useQuery(api.projects.list) || [];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div className="flex gap-3">
          <Link 
            href="/admin/projects/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Add New Project
          </Link>
          <Link 
            href="/admin/projects/categories"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors cursor-pointer"
          >
            Categories
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white rounded-lg shadow p-6">
        {projects.length === 0 ? (
          <p className="text-gray-500 text-center">No projects found. Add your first project!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project._id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {project.imageUrl && (
                  <div className="aspect-video w-full">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Client: {project.clientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      Completion: {new Date(project.completionDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      onClick={() => {/* TODO: Implement edit */}}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {/* TODO: Implement delete */}}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
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

export default ProjectsPage; 
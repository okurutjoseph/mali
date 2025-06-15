'use client';

import Link from 'next/link';
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';

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

const ProjectsPage = () => {
  const router = useRouter();
  const projects = useQuery(api.projects.list) || [];
  const deleteProject = useMutation(api.projects.remove);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (projectId: Id<"projects">) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      setIsDeleting(projectId);
      try {
        await deleteProject({ id: projectId });
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Failed to delete project. Please try again.');
      } finally {
        setIsDeleting(null);
      }
    }
  };

  const handleEdit = (projectId: Id<"projects">) => {
    router.push(`/admin/projects/edit/${projectId}`);
  };

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
            {projects.map((project: Project) => (
              <div key={project._id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {project.imageUrl && (
                  <div className="aspect-video w-full relative group">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => handleEdit(project._id)}
                        className="bg-white text-gray-800 px-3 py-1 rounded-full mx-2 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        Edit Image
                      </button>
                    </div>
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
                      onClick={() => handleEdit(project._id)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer disabled:opacity-50"
                      disabled={isDeleting === project._id}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer disabled:opacity-50"
                      disabled={isDeleting === project._id}
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
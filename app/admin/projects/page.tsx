'use client';

import { useState } from 'react';
import Link from 'next/link';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Link 
          href="/admin/projects/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New Project
        </Link>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {projects.length === 0 ? (
            <p className="text-gray-500 text-center">No projects found. Add your first project!</p>
          ) : (
            <div className="grid gap-4">
              {/* Project items will go here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 
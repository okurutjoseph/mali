'use client';

import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function OurWork() {
  const categories = useQuery(api.projectCategories.list) || [];
  const projects = useQuery(api.projects.list) || [];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <main>
      <Breadcrumb 
        pageName="Our Work"
        bgImage="/images/breadcrumb/our-work.jpg"
      />
      
      {/* Categories Tabs */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12 relative z-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              href={`/our-work/${getSlug(project.title)}`}
              key={project._id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Client: {project.clientName}</span>
                  <span>
                    {new Date(project.completionDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 
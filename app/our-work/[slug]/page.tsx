'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = useQuery(api.projects.getBySlug, { slug: resolvedParams.slug });

  if (!project) {
    return (
      <main className="min-h-screen">
        <Breadcrumb 
          pageName="Project Details"
          bgImage="/images/breadcrumb/our-work.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Breadcrumb 
        pageName={project.title}
        bgImage="/images/breadcrumb/our-work.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-8">
            <span className="text-sm font-medium text-blue-600 mb-2 block">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>Client: {project.clientName}</span>
              <span>•</span>
              <span>Completed: {new Date(project.completionDate).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Project Description */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href="/our-work"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 
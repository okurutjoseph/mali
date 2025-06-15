'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const posts = useQuery(api.posts.list) || [];

  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const post = posts.find(p => getSlug(p.title) === resolvedParams.slug && p.published);

  if (!post) {
    return (
      <main className="min-h-screen">
        <Breadcrumb 
          pageName="Blog Post"
          bgImage="/images/breadcrumb/blog.jpg"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Post not found or still loading...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Breadcrumb 
        pageName={post.title}
        bgImage="/images/breadcrumb/blog.jpg"
      />

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <span 
                  key={index}
                  className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-lg">No image available</span>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="prose max-w-none">
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href="/blog"
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
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
} 
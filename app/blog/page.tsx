'use client';

import { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function Blog() {
  const categories = useQuery(api.postCategories.list) || [];
  const posts = useQuery(api.posts.list) || [];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter only published posts
  const publishedPosts = posts.filter(post => post.published);
  
  // Filter by category if one is selected
  const filteredPosts = activeCategory
    ? publishedPosts.filter(post => post.categories.includes(activeCategory))
    : publishedPosts;

  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  return (
    <main>
      <Breadcrumb 
        pageName="Blog"
        bgImage="/images/breadcrumb/blog.jpg"
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
            All Posts
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              href={`/blog/${getSlug(post.title)}`}
              key={post._id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative h-64">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {activeCategory 
                ? `No posts found in category "${activeCategory}"`
                : 'No blog posts available yet.'
              }
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';

interface Post {
  _id: Id<"posts">;
  title: string;
  excerpt: string;
  imageUrl: string;
  createdAt: number;
  author: string;
  categories: string[];
  published: boolean;
  slug?: string; // Make slug optional since some posts might not have it
}

const BlogSection = () => {
  const posts = useQuery(api.posts.list) || [];
  
  // Helper function to generate slug from title
  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Filter published posts and take the latest 3
  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publishedPosts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <Link href={`/blog/${post.slug || getSlug(post.title)}`} className="block">
            <div className="relative h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <span className="ml-auto text-sm text-gray-500">By {post.author}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                  READ MORE
                </span>
                <div className="flex gap-2">
                  {post.categories.map((category, index) => (
                    <span key={index} className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogSection; 
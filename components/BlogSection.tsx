import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';
import PrimaryButton from './PrimaryButton';

interface Post {
  _id: Id<"posts">;
  title: string;
  excerpt: string;
  imageUrl: string;
  createdAt: number;
  author: string;
  categories: string[];
  published: boolean;
  slug?: string;
}

const BlogSection = () => {
  const posts = useQuery(api.posts.list) || [];
  
  const getSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {publishedPosts.map((post) => (
        <div key={post._id} className="relative px-3">
          <Link href={`/blog/${post.slug || getSlug(post.title)}`} className="block">
            <div className="relative h-[319px] w-[108%] -ml-[4%]">
              <Image
                src={post.imageUrl}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-[9px]"
              />
            </div>
            <div className="rounded-[25px] z-[1] -mt-[75px] px-[15px] py-[90px] pb-[45px] relative bg-[#d4d5e1] w-[108%] -ml-[4%] min-h-[280px]">
              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
              <div className="absolute left-1/2 -bottom-5 transform -translate-x-1/2">
                <PrimaryButton>READ MORE</PrimaryButton>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
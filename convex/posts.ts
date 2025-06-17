import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc } from "./_generated/dataModel";

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

// Helper function to ensure unique slug
const ensureUniqueSlug = async (ctx: any, baseSlug: string, currentId?: string) => {
  let slug = baseSlug;
  let counter = 1;
  let exists = true;

  while (exists) {
    const existing = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q: any) => q.eq("slug", slug))
      .first();
    
    exists = existing !== null && existing._id !== currentId;
    
    if (exists) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
  }

  return slug;
};

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
    imageUrl: v.string(),
    excerpt: v.string(),
    author: v.string(),
    categories: v.array(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const baseSlug = generateSlug(args.title);
    const slug = await ensureUniqueSlug(ctx, baseSlug);
    
    const now = Date.now();
    return await ctx.db.insert("posts", {
      ...args,
      slug,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const list = query({
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").collect();
    return posts;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();
  },
});

export const update = mutation({
  args: {
    id: v.id("posts"),
    title: v.string(),
    content: v.string(),
    imageUrl: v.string(),
    excerpt: v.string(),
    author: v.string(),
    categories: v.array(v.string()),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    const baseSlug = generateSlug(args.title);
    const slug = await ensureUniqueSlug(ctx, baseSlug, id);
    
    await ctx.db.patch(id, {
      ...rest,
      slug,
      updatedAt: Date.now(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const togglePublish = mutation({
  args: { 
    id: v.id("posts"),
    published: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, published } = args;
    await ctx.db.patch(id, {
      published,
      updatedAt: Date.now(),
    });
  },
});

// Function to update existing posts with slugs
export const updateExistingSlugs = mutation({
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").collect();
    
    for (const post of posts) {
      if (!post.slug) {
        const baseSlug = generateSlug(post.title);
        const slug = await ensureUniqueSlug(ctx, baseSlug, post._id);
        
        await ctx.db.patch(post._id, {
          slug,
          updatedAt: Date.now(),
        });
      }
    }
  },
});
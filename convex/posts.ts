import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
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
    const now = Date.now();
    const slug = generateSlug(args.title);
    
    // Check if slug exists
    const existingPost = await ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("slug"), slug))
      .first();

    // If slug exists, append a number
    let finalSlug = slug;
    if (existingPost) {
      const count = await ctx.db
        .query("posts")
        .filter((q) => q.startsWith(q.field("slug"), slug))
        .collect();
      finalSlug = `${slug}-${count.length + 1}`;
    }

    const postId = await ctx.db.insert("posts", {
      ...args,
      slug: finalSlug,
      createdAt: now,
      updatedAt: now,
    });
    return postId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("posts")
      .order("desc")
      .collect();
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
    const { id, title, ...rest } = args;
    
    // Only update slug if title changes
    const existingPost = await ctx.db.get(id);
    if (existingPost && existingPost.title !== title) {
      const newSlug = generateSlug(title);
      
      // Check if new slug exists (excluding current post)
      const existingSlug = await ctx.db
        .query("posts")
        .filter((q) => 
          q.and(
            q.eq(q.field("slug"), newSlug),
            q.neq(q.field("_id"), id)
          )
        )
        .first();

      // If slug exists, append a number
      let finalSlug = newSlug;
      if (existingSlug) {
        const count = await ctx.db
          .query("posts")
          .filter((q) => q.startsWith(q.field("slug"), newSlug))
          .collect();
        finalSlug = `${newSlug}-${count.length + 1}`;
      }

      await ctx.db.patch(id, {
        title,
        slug: finalSlug,
        ...rest,
        updatedAt: Date.now(),
      });
    } else {
      await ctx.db.patch(id, {
        title,
        ...rest,
        updatedAt: Date.now(),
      });
    }
  },
});

export const remove = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
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
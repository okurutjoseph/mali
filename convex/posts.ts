import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

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
    const postId = await ctx.db.insert("posts", {
      ...args,
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
    await ctx.db.patch(id, {
      ...rest,
      updatedAt: Date.now(),
    });
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
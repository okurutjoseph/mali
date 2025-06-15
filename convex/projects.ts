import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const projects = await ctx.db
      .query("projects")
      .collect();
    
    const getSlug = (title: string) => {
      return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    return projects.find(project => getSlug(project.title) === args.slug) || null;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    clientName: v.string(),
    completionDate: v.number(),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert("projects", {
      ...args,
      createdAt: Date.now(),
    });
    return projectId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("projects")
      .order("desc")
      .collect();
  },
});

export const update = mutation({
  args: {
    id: v.id("projects"),
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    clientName: v.string(),
    completionDate: v.number(),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
}); 
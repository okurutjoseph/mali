import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const categoryId = await ctx.db.insert("projectCategories", {
      ...args,
      createdAt: Date.now(),
    });
    return categoryId;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("projectCategories")
      .order("desc")
      .collect();
  },
});

export const update = mutation({
  args: {
    id: v.id("projectCategories"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

export const remove = mutation({
  args: { id: v.id("projectCategories") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
}); 
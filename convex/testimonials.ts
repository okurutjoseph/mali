import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    const testimonials = await ctx.db.query("testimonials").collect();
    return testimonials;
  },
});

export const create = mutation({
  args: {
    clientName: v.string(),
    company: v.string(),
    testimonial: v.string(),
    rating: v.number(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const testimonialId = await ctx.db.insert("testimonials", {
      ...args,
      createdAt: Date.now(),
    });
    return testimonialId;
  },
});

export const update = mutation({
  args: {
    id: v.id("testimonials"),
    clientName: v.string(),
    company: v.string(),
    testimonial: v.string(),
    rating: v.number(),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

export const remove = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
}); 
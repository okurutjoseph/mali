import { mutation, query, MutationCtx } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getTestimonials = query({
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});

export const deleteTestimonial = mutation({
  args: { id: v.id("testimonials") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const addTestimonial = mutation({
  args: {
    name: v.string(),
    role: v.string(),
    companyLogoUrl: v.string(),
    description: v.string(),
  },
  handler: async (
    ctx: MutationCtx, 
    args: {
      name: string;
      role: string;
      companyLogoUrl: string;
      description: string;
    }
  ) => {
    return await ctx.db.insert("testimonials", {
      name: args.name,
      role: args.role,
      companyLogoUrl: args.companyLogoUrl,
      description: args.description,
      createdAt: Date.now(),
    });
  },
});
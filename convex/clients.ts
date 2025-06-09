import { mutation, query, MutationCtx } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

export const getClients = query({
  handler: async (ctx) => {
    return await ctx.db.query("clients").order("desc").collect();
  },
});

export const deleteClient = mutation({
  args: { id: v.id("clients") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const addClient = mutation({
  args: {
    name: v.string(),
    logoUrl: v.string(),
  },
  handler: async (
    ctx: MutationCtx, 
    args: {
      name: string;
      logoUrl: string;
    }
  ) => {
    return await ctx.db.insert("clients", {
      name: args.name,
      logoUrl: args.logoUrl,
      createdAt: Date.now(),
    });
  },
});

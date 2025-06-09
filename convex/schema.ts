import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  clients: defineTable({
    name: v.string(),
    logoUrl: v.string(),
    createdAt: v.number(),
  }),
  testimonials: defineTable({
    name: v.string(),
    role: v.string(),
    companyLogoUrl: v.string(),
    description: v.string(),
    createdAt: v.number(),
  }),
});

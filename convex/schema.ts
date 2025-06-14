import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    clientName: v.string(),
    completionDate: v.number(),
    createdAt: v.number(),
  }),
  posts: defineTable({
    title: v.string(),
    content: v.string(),
    imageUrl: v.string(),
    excerpt: v.string(),
    author: v.string(),
    categories: v.array(v.string()),
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
  projectCategories: defineTable({
    name: v.string(),
    createdAt: v.number(),
  }),
  postCategories: defineTable({
    name: v.string(),
    createdAt: v.number(),
  }),
});

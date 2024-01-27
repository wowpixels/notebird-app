import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

// create a mutation to create a document
export const create = mutation({
  args: {
    title: v.string(),
    parentDocument: v.optional(v.id("documents")),
  },
  handler: async (ctx, args) => {
    // get the user's identity
    const identity = await ctx.auth.getUserIdentity();

    // if the user is not logged in, throw an error
    if (!identity) {
      throw new Error("Not logged in");
    }

    // get the user's id
    const userId = identity.subject;

    // insert the document into the database
    const document = await ctx.db.insert("documents", {
      title: args.title,
      parentDocument: args.parentDocument,
      userId,
      isArchived: false,
      isPublished: false,
    });

    return document;
  },
});

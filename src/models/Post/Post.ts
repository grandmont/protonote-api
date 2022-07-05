import { extendType, intArg, nonNull, objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.int("id");
  },
});

export const PostQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("getPost", {
      type: "Post",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(source, args, { prisma }) {
        return await prisma.post.findUnique({ where: { id: args.id } });
      },
    });
    t.list.field("getPosts", {
      type: "Post",
      async resolve(source, args, { prisma }) {
        return await prisma.post.findMany();
      },
    });
  },
});

export const PostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createPost", {
      type: "Post",
      async resolve(source, args, { prisma }) {
        return await prisma.post.create({
          data: args,
        });
      },
    });
  },
});

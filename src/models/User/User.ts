import {
  enumType,
  extendType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.field("role", {
      type: RoleEnum,
    });
  },
});

export const RoleEnum = enumType({
  name: "Role",
  members: ["USER", "ADMIN"],
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("getUser", {
      type: "User",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(source, args, { prisma }) {
        return await prisma.user.findUnique({ where: { id: args.id } });
      },
    });
    t.list.field("getUsers", {
      type: "User",
      async resolve(source, args, { prisma }) {
        return await prisma.user.findMany();
      },
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(source, args, { prisma }) {
        return await prisma.user.create({
          data: args,
        });
      },
    });
  },
});

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
    });
    t.field("getUsers", {
      type: "User",
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
      async resolve(parent, args, { prisma }) {
        return await prisma.user.create({
          data: args,
        });
      },
    });
  },
});

import { enumType, extendType, intArg, nonNull, objectType } from "nexus";

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
  },
});

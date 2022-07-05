exports.model = (name) => {
  const lowerCaseName = name.toLowerCase();

  return `import { extendType, intArg, nonNull, objectType } from "nexus";

export const ${name} = objectType({
  name: "${name}",
  definition(t) {
    t.nonNull.int("id");
  },
});

export const ${name}Query = extendType({
  type: "Query",
  definition(t) {
    t.field("get${name}", {
      type: "${name}",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(source, args, { prisma }) {
        return await prisma.${lowerCaseName}.findUnique({ where: { id: args.id } });
      },
    });
    t.list.field("get${name}s", {
      type: "${name}",
      async resolve(source, args, { prisma }) {
        return await prisma.${lowerCaseName}.findMany();
      },
    });
  },
});

export const ${name}Mutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("create${name}", {
      type: "${name}",
      async resolve(source, args, { prisma }) {
        return await prisma.${lowerCaseName}.create({
          data: args,
        });
      },
    });
  },
});
`;
};

exports.barrel = (name) => `export * from "./${name}";
`;

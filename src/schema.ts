import * as types from "./models";
import { join } from "path";
import { makeSchema } from "nexus";

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), "./generated/schema.graphql"),
    typegen: join(process.cwd(), "./generated/nexus-typegen.ts"),
  },
  contextType: {
    module: join(process.cwd(), "./src/context.ts"),
    export: "Context",
  },
});

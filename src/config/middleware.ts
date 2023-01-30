import { ResolversEnhanceMap } from "../../prisma/type-graphql";
import { UseMiddleware } from "type-graphql";

import deserializeUser from "../middlewares/deserializeUser";

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [UseMiddleware(deserializeUser)],
  },
};

export default resolversEnhanceMap;

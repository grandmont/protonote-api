import { ResolversEnhanceMap } from "../generated";

import { UseMiddleware } from "type-graphql";

import ValidateToken from "../middlewares/ValidateToken";

const resolversEnhanceMap: ResolversEnhanceMap = {
  // User: {
  //   _all: [UseMiddleware(ValidateToken)],
  // },
  // Proto: {
  //   _all: [UseMiddleware(ValidateToken)]
  // }
};

export default resolversEnhanceMap;

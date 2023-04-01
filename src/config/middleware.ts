import { UseMiddleware } from "type-graphql";

import { ResolversEnhanceMap } from "../generated";
import ValidateToken from "../middlewares/ValidateToken";

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [UseMiddleware(ValidateToken)],
  },
  Proto: {
    _all: [UseMiddleware(ValidateToken)],
  },
  Integration: {
    _all: [UseMiddleware(ValidateToken)],
  },
  IntegrationData: {
    _all: [UseMiddleware(ValidateToken)],
  },
  IntegrationDataOnProtos: {
    _all: [UseMiddleware(ValidateToken)],
  },
  DeezerData: {
    _all: [UseMiddleware(ValidateToken)],
  },
  DeezerDataOnProtos: {
    _all: [UseMiddleware(ValidateToken)],
  },
};

const middlewareMap =
  process.env.ENVIRONMENT === "development" ? {} : resolversEnhanceMap;

export default middlewareMap;

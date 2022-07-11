import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProtoPropUpdateManyMutationInput } from "../../../inputs/ProtoPropUpdateManyMutationInput";
import { ProtoPropWhereInput } from "../../../inputs/ProtoPropWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProtoPropArgs {
  @TypeGraphQL.Field(_type => ProtoPropUpdateManyMutationInput, {
    nullable: false
  })
  data!: ProtoPropUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ProtoPropWhereInput, {
    nullable: true
  })
  where?: ProtoPropWhereInput | undefined;
}

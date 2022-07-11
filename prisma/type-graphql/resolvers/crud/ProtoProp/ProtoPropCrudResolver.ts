import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProtoPropArgs } from "./args/AggregateProtoPropArgs";
import { CreateManyProtoPropArgs } from "./args/CreateManyProtoPropArgs";
import { CreateProtoPropArgs } from "./args/CreateProtoPropArgs";
import { DeleteManyProtoPropArgs } from "./args/DeleteManyProtoPropArgs";
import { DeleteProtoPropArgs } from "./args/DeleteProtoPropArgs";
import { FindFirstProtoPropArgs } from "./args/FindFirstProtoPropArgs";
import { FindManyProtoPropArgs } from "./args/FindManyProtoPropArgs";
import { FindUniqueProtoPropArgs } from "./args/FindUniqueProtoPropArgs";
import { GroupByProtoPropArgs } from "./args/GroupByProtoPropArgs";
import { UpdateManyProtoPropArgs } from "./args/UpdateManyProtoPropArgs";
import { UpdateProtoPropArgs } from "./args/UpdateProtoPropArgs";
import { UpsertProtoPropArgs } from "./args/UpsertProtoPropArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ProtoProp } from "../../../models/ProtoProp";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProtoProp } from "../../outputs/AggregateProtoProp";
import { ProtoPropGroupBy } from "../../outputs/ProtoPropGroupBy";

@TypeGraphQL.Resolver(_of => ProtoProp)
export class ProtoPropCrudResolver {
  @TypeGraphQL.Query(_returns => ProtoProp, {
    nullable: true
  })
  async protoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ProtoProp, {
    nullable: true
  })
  async findFirstProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProtoProp], {
    nullable: false
  })
  async protoProps(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyProtoPropArgs): Promise<ProtoProp[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProtoProp, {
    nullable: false
  })
  async createProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateProtoPropArgs): Promise<ProtoProp> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyProtoPropArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProtoProp, {
    nullable: true
  })
  async deleteProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProtoProp, {
    nullable: true
  })
  async updateProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateProtoPropArgs): Promise<ProtoProp | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyProtoPropArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyProtoPropArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ProtoProp, {
    nullable: false
  })
  async upsertProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertProtoPropArgs): Promise<ProtoProp> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateProtoProp, {
    nullable: false
  })
  async aggregateProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProtoPropArgs): Promise<AggregateProtoProp> {
    return getPrismaFromContext(ctx).protoProp.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [ProtoPropGroupBy], {
    nullable: false
  })
  async groupByProtoProp(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByProtoPropArgs): Promise<ProtoPropGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).protoProp.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

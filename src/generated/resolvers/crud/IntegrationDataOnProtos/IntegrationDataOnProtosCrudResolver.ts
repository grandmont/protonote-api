import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationDataOnProtosArgs } from "./args/AggregateIntegrationDataOnProtosArgs";
import { CreateManyIntegrationDataOnProtosArgs } from "./args/CreateManyIntegrationDataOnProtosArgs";
import { CreateOneIntegrationDataOnProtosArgs } from "./args/CreateOneIntegrationDataOnProtosArgs";
import { DeleteManyIntegrationDataOnProtosArgs } from "./args/DeleteManyIntegrationDataOnProtosArgs";
import { DeleteOneIntegrationDataOnProtosArgs } from "./args/DeleteOneIntegrationDataOnProtosArgs";
import { FindFirstIntegrationDataOnProtosArgs } from "./args/FindFirstIntegrationDataOnProtosArgs";
import { FindFirstIntegrationDataOnProtosOrThrowArgs } from "./args/FindFirstIntegrationDataOnProtosOrThrowArgs";
import { FindManyIntegrationDataOnProtosArgs } from "./args/FindManyIntegrationDataOnProtosArgs";
import { FindUniqueIntegrationDataOnProtosArgs } from "./args/FindUniqueIntegrationDataOnProtosArgs";
import { FindUniqueIntegrationDataOnProtosOrThrowArgs } from "./args/FindUniqueIntegrationDataOnProtosOrThrowArgs";
import { GroupByIntegrationDataOnProtosArgs } from "./args/GroupByIntegrationDataOnProtosArgs";
import { UpdateManyIntegrationDataOnProtosArgs } from "./args/UpdateManyIntegrationDataOnProtosArgs";
import { UpdateOneIntegrationDataOnProtosArgs } from "./args/UpdateOneIntegrationDataOnProtosArgs";
import { UpsertOneIntegrationDataOnProtosArgs } from "./args/UpsertOneIntegrationDataOnProtosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { IntegrationDataOnProtos } from "../../../models/IntegrationDataOnProtos";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIntegrationDataOnProtos } from "../../outputs/AggregateIntegrationDataOnProtos";
import { IntegrationDataOnProtosGroupBy } from "../../outputs/IntegrationDataOnProtosGroupBy";

@TypeGraphQL.Resolver(_of => IntegrationDataOnProtos)
export class IntegrationDataOnProtosCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateIntegrationDataOnProtos, {
    nullable: false
  })
  async aggregateIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIntegrationDataOnProtosArgs): Promise<AggregateIntegrationDataOnProtos> {
    return getPrismaFromContext(ctx).integrationDataOnProtos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIntegrationDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: false
  })
  async createOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIntegrationDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async deleteOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findFirstIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findFirstIntegrationDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIntegrationDataOnProtosOrThrowArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IntegrationDataOnProtos], {
    nullable: false
  })
  async findManyIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findUniqueIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async findUniqueIntegrationDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIntegrationDataOnProtosOrThrowArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IntegrationDataOnProtosGroupBy], {
    nullable: false
  })
  async groupByIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIntegrationDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: true
  })
  async updateOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => IntegrationDataOnProtos, {
    nullable: false
  })
  async upsertOneIntegrationDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIntegrationDataOnProtosArgs): Promise<IntegrationDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).integrationDataOnProtos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

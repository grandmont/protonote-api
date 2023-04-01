import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDeezerDataArgs } from "./args/AggregateDeezerDataArgs";
import { CreateManyDeezerDataArgs } from "./args/CreateManyDeezerDataArgs";
import { CreateOneDeezerDataArgs } from "./args/CreateOneDeezerDataArgs";
import { DeleteManyDeezerDataArgs } from "./args/DeleteManyDeezerDataArgs";
import { DeleteOneDeezerDataArgs } from "./args/DeleteOneDeezerDataArgs";
import { FindFirstDeezerDataArgs } from "./args/FindFirstDeezerDataArgs";
import { FindFirstDeezerDataOrThrowArgs } from "./args/FindFirstDeezerDataOrThrowArgs";
import { FindManyDeezerDataArgs } from "./args/FindManyDeezerDataArgs";
import { FindUniqueDeezerDataArgs } from "./args/FindUniqueDeezerDataArgs";
import { FindUniqueDeezerDataOrThrowArgs } from "./args/FindUniqueDeezerDataOrThrowArgs";
import { GroupByDeezerDataArgs } from "./args/GroupByDeezerDataArgs";
import { UpdateManyDeezerDataArgs } from "./args/UpdateManyDeezerDataArgs";
import { UpdateOneDeezerDataArgs } from "./args/UpdateOneDeezerDataArgs";
import { UpsertOneDeezerDataArgs } from "./args/UpsertOneDeezerDataArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { DeezerData } from "../../../models/DeezerData";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDeezerData } from "../../outputs/AggregateDeezerData";
import { DeezerDataGroupBy } from "../../outputs/DeezerDataGroupBy";

@TypeGraphQL.Resolver(_of => DeezerData)
export class DeezerDataCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateDeezerData, {
    nullable: false
  })
  async aggregateDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeezerDataArgs): Promise<AggregateDeezerData> {
    return getPrismaFromContext(ctx).deezerData.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyDeezerDataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerData, {
    nullable: false
  })
  async createOneDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDeezerDataArgs): Promise<DeezerData> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyDeezerDataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerData, {
    nullable: true
  })
  async deleteOneDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDeezerDataArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findFirstDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findFirstDeezerDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataOrThrowArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeezerData], {
    nullable: false
  })
  async findManyDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDeezerDataArgs): Promise<DeezerData[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findUniqueDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerData, {
    nullable: true
  })
  async findUniqueDeezerDataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataOrThrowArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeezerDataGroupBy], {
    nullable: false
  })
  async groupByDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeezerDataArgs): Promise<DeezerDataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyDeezerDataArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerData, {
    nullable: true
  })
  async updateOneDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDeezerDataArgs): Promise<DeezerData | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerData, {
    nullable: false
  })
  async upsertOneDeezerData(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDeezerDataArgs): Promise<DeezerData> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerData.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

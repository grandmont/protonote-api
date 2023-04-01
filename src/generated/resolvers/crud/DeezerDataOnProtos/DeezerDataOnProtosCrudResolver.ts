import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateDeezerDataOnProtosArgs } from "./args/AggregateDeezerDataOnProtosArgs";
import { CreateManyDeezerDataOnProtosArgs } from "./args/CreateManyDeezerDataOnProtosArgs";
import { CreateOneDeezerDataOnProtosArgs } from "./args/CreateOneDeezerDataOnProtosArgs";
import { DeleteManyDeezerDataOnProtosArgs } from "./args/DeleteManyDeezerDataOnProtosArgs";
import { DeleteOneDeezerDataOnProtosArgs } from "./args/DeleteOneDeezerDataOnProtosArgs";
import { FindFirstDeezerDataOnProtosArgs } from "./args/FindFirstDeezerDataOnProtosArgs";
import { FindFirstDeezerDataOnProtosOrThrowArgs } from "./args/FindFirstDeezerDataOnProtosOrThrowArgs";
import { FindManyDeezerDataOnProtosArgs } from "./args/FindManyDeezerDataOnProtosArgs";
import { FindUniqueDeezerDataOnProtosArgs } from "./args/FindUniqueDeezerDataOnProtosArgs";
import { FindUniqueDeezerDataOnProtosOrThrowArgs } from "./args/FindUniqueDeezerDataOnProtosOrThrowArgs";
import { GroupByDeezerDataOnProtosArgs } from "./args/GroupByDeezerDataOnProtosArgs";
import { UpdateManyDeezerDataOnProtosArgs } from "./args/UpdateManyDeezerDataOnProtosArgs";
import { UpdateOneDeezerDataOnProtosArgs } from "./args/UpdateOneDeezerDataOnProtosArgs";
import { UpsertOneDeezerDataOnProtosArgs } from "./args/UpsertOneDeezerDataOnProtosArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { DeezerDataOnProtos } from "../../../models/DeezerDataOnProtos";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDeezerDataOnProtos } from "../../outputs/AggregateDeezerDataOnProtos";
import { DeezerDataOnProtosGroupBy } from "../../outputs/DeezerDataOnProtosGroupBy";

@TypeGraphQL.Resolver(_of => DeezerDataOnProtos)
export class DeezerDataOnProtosCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateDeezerDataOnProtos, {
    nullable: false
  })
  async aggregateDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeezerDataOnProtosArgs): Promise<AggregateDeezerDataOnProtos> {
    return getPrismaFromContext(ctx).deezerDataOnProtos.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyDeezerDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerDataOnProtos, {
    nullable: false
  })
  async createOneDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyDeezerDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async deleteOneDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findFirstDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findFirstDeezerDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeezerDataOnProtosOrThrowArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeezerDataOnProtos], {
    nullable: false
  })
  async findManyDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findUniqueDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async findUniqueDeezerDataOnProtosOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueDeezerDataOnProtosOrThrowArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [DeezerDataOnProtosGroupBy], {
    nullable: false
  })
  async groupByDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeezerDataOnProtosArgs): Promise<DeezerDataOnProtosGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyDeezerDataOnProtosArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerDataOnProtos, {
    nullable: true
  })
  async updateOneDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => DeezerDataOnProtos, {
    nullable: false
  })
  async upsertOneDeezerDataOnProtos(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDeezerDataOnProtosArgs): Promise<DeezerDataOnProtos> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).deezerDataOnProtos.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

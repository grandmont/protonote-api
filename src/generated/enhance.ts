import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Proto: crudResolvers.ProtoCrudResolver,
  Integration: crudResolvers.IntegrationCrudResolver,
  IntegrationData: crudResolvers.IntegrationDataCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Proto: {
    aggregateProto: actionResolvers.AggregateProtoResolver,
    createManyProto: actionResolvers.CreateManyProtoResolver,
    createOneProto: actionResolvers.CreateOneProtoResolver,
    deleteManyProto: actionResolvers.DeleteManyProtoResolver,
    deleteOneProto: actionResolvers.DeleteOneProtoResolver,
    findFirstProto: actionResolvers.FindFirstProtoResolver,
    findFirstProtoOrThrow: actionResolvers.FindFirstProtoOrThrowResolver,
    protos: actionResolvers.FindManyProtoResolver,
    proto: actionResolvers.FindUniqueProtoResolver,
    getProto: actionResolvers.FindUniqueProtoOrThrowResolver,
    groupByProto: actionResolvers.GroupByProtoResolver,
    updateManyProto: actionResolvers.UpdateManyProtoResolver,
    updateOneProto: actionResolvers.UpdateOneProtoResolver,
    upsertOneProto: actionResolvers.UpsertOneProtoResolver
  },
  Integration: {
    aggregateIntegration: actionResolvers.AggregateIntegrationResolver,
    createManyIntegration: actionResolvers.CreateManyIntegrationResolver,
    createOneIntegration: actionResolvers.CreateOneIntegrationResolver,
    deleteManyIntegration: actionResolvers.DeleteManyIntegrationResolver,
    deleteOneIntegration: actionResolvers.DeleteOneIntegrationResolver,
    findFirstIntegration: actionResolvers.FindFirstIntegrationResolver,
    findFirstIntegrationOrThrow: actionResolvers.FindFirstIntegrationOrThrowResolver,
    integrations: actionResolvers.FindManyIntegrationResolver,
    integration: actionResolvers.FindUniqueIntegrationResolver,
    getIntegration: actionResolvers.FindUniqueIntegrationOrThrowResolver,
    groupByIntegration: actionResolvers.GroupByIntegrationResolver,
    updateManyIntegration: actionResolvers.UpdateManyIntegrationResolver,
    updateOneIntegration: actionResolvers.UpdateOneIntegrationResolver,
    upsertOneIntegration: actionResolvers.UpsertOneIntegrationResolver
  },
  IntegrationData: {
    aggregateIntegrationData: actionResolvers.AggregateIntegrationDataResolver,
    createManyIntegrationData: actionResolvers.CreateManyIntegrationDataResolver,
    createOneIntegrationData: actionResolvers.CreateOneIntegrationDataResolver,
    deleteManyIntegrationData: actionResolvers.DeleteManyIntegrationDataResolver,
    deleteOneIntegrationData: actionResolvers.DeleteOneIntegrationDataResolver,
    findFirstIntegrationData: actionResolvers.FindFirstIntegrationDataResolver,
    findFirstIntegrationDataOrThrow: actionResolvers.FindFirstIntegrationDataOrThrowResolver,
    findManyIntegrationData: actionResolvers.FindManyIntegrationDataResolver,
    findUniqueIntegrationData: actionResolvers.FindUniqueIntegrationDataResolver,
    findUniqueIntegrationDataOrThrow: actionResolvers.FindUniqueIntegrationDataOrThrowResolver,
    groupByIntegrationData: actionResolvers.GroupByIntegrationDataResolver,
    updateManyIntegrationData: actionResolvers.UpdateManyIntegrationDataResolver,
    updateOneIntegrationData: actionResolvers.UpdateOneIntegrationDataResolver,
    upsertOneIntegrationData: actionResolvers.UpsertOneIntegrationDataResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Proto: ["aggregateProto", "createManyProto", "createOneProto", "deleteManyProto", "deleteOneProto", "findFirstProto", "findFirstProtoOrThrow", "protos", "proto", "getProto", "groupByProto", "updateManyProto", "updateOneProto", "upsertOneProto"],
  Integration: ["aggregateIntegration", "createManyIntegration", "createOneIntegration", "deleteManyIntegration", "deleteOneIntegration", "findFirstIntegration", "findFirstIntegrationOrThrow", "integrations", "integration", "getIntegration", "groupByIntegration", "updateManyIntegration", "updateOneIntegration", "upsertOneIntegration"],
  IntegrationData: ["aggregateIntegrationData", "createManyIntegrationData", "createOneIntegrationData", "deleteManyIntegrationData", "deleteOneIntegrationData", "findFirstIntegrationData", "findFirstIntegrationDataOrThrow", "findManyIntegrationData", "findUniqueIntegrationData", "findUniqueIntegrationDataOrThrow", "groupByIntegrationData", "updateManyIntegrationData", "updateOneIntegrationData", "upsertOneIntegrationData"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateProtoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProtoArgs: ["data", "skipDuplicates"],
  CreateOneProtoArgs: ["data"],
  DeleteManyProtoArgs: ["where"],
  DeleteOneProtoArgs: ["where"],
  FindFirstProtoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProtoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProtoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProtoArgs: ["where"],
  FindUniqueProtoOrThrowArgs: ["where"],
  GroupByProtoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProtoArgs: ["data", "where"],
  UpdateOneProtoArgs: ["data", "where"],
  UpsertOneProtoArgs: ["where", "create", "update"],
  AggregateIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIntegrationArgs: ["data", "skipDuplicates"],
  CreateOneIntegrationArgs: ["data"],
  DeleteManyIntegrationArgs: ["where"],
  DeleteOneIntegrationArgs: ["where"],
  FindFirstIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIntegrationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIntegrationArgs: ["where"],
  FindUniqueIntegrationOrThrowArgs: ["where"],
  GroupByIntegrationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIntegrationArgs: ["data", "where"],
  UpdateOneIntegrationArgs: ["data", "where"],
  UpsertOneIntegrationArgs: ["where", "create", "update"],
  AggregateIntegrationDataArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIntegrationDataArgs: ["data", "skipDuplicates"],
  CreateOneIntegrationDataArgs: ["data"],
  DeleteManyIntegrationDataArgs: ["where"],
  DeleteOneIntegrationDataArgs: ["where"],
  FindFirstIntegrationDataArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIntegrationDataOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIntegrationDataArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIntegrationDataArgs: ["where"],
  FindUniqueIntegrationDataOrThrowArgs: ["where"],
  GroupByIntegrationDataArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIntegrationDataArgs: ["data", "where"],
  UpdateOneIntegrationDataArgs: ["data", "where"],
  UpsertOneIntegrationDataArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Proto: relationResolvers.ProtoRelationsResolver,
  Integration: relationResolvers.IntegrationRelationsResolver,
  IntegrationData: relationResolvers.IntegrationDataRelationsResolver
};
const relationResolversInfo = {
  User: ["protos", "integrations"],
  Proto: ["user", "IntegrationData"],
  Integration: ["user", "IntegrationData"],
  IntegrationData: ["integration", "proto"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "createdAt", "email", "name", "picture", "provider"],
  Proto: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  Integration: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationData: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "email", "name", "picture", "provider", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIntegration: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationGroupBy: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIntegrationData: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationDataGroupBy: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["protos", "integrations"],
  UserCountAggregate: ["id", "createdAt", "email", "name", "picture", "provider", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserMaxAggregate: ["id", "createdAt", "email", "name", "picture", "provider"],
  ProtoCount: ["IntegrationData"],
  ProtoCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_all"],
  ProtoAvgAggregate: ["id", "userId"],
  ProtoSumAggregate: ["id", "userId"],
  ProtoMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationCount: ["IntegrationData"],
  IntegrationCountAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_all"],
  IntegrationAvgAggregate: ["id", "userId"],
  IntegrationSumAggregate: ["id", "userId"],
  IntegrationMinAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationMaxAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationDataCountAggregate: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId", "_all"],
  IntegrationDataAvgAggregate: ["id", "integrationId", "protoId"],
  IntegrationDataSumAggregate: ["id", "integrationId", "protoId"],
  IntegrationDataMinAggregate: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  IntegrationDataMaxAggregate: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserOrderByWithRelationInput: ["id", "createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "email", "name", "picture", "provider", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "picture", "provider"],
  ProtoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId", "IntegrationData"],
  ProtoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId", "IntegrationData"],
  ProtoWhereUniqueInput: ["id"],
  ProtoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId", "IntegrationData"],
  IntegrationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId", "IntegrationData"],
  IntegrationWhereUniqueInput: ["id"],
  IntegrationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationDataWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "data", "integration", "integrationId", "proto", "protoId"],
  IntegrationDataOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "data", "integration", "integrationId", "proto", "protoId"],
  IntegrationDataWhereUniqueInput: ["id"],
  IntegrationDataOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationDataScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  UserCreateInput: ["createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserUpdateInput: ["createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserCreateManyInput: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserUpdateManyMutationInput: ["createdAt", "email", "name", "picture", "provider"],
  ProtoCreateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user", "IntegrationData"],
  ProtoUpdateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user", "IntegrationData"],
  ProtoCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationCreateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user", "IntegrationData"],
  IntegrationUpdateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user", "IntegrationData"],
  IntegrationCreateManyInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationUpdateManyMutationInput: ["createdAt", "updatedAt", "externalId", "provider", "status"],
  IntegrationDataCreateInput: ["createdAt", "updatedAt", "data", "integration", "proto"],
  IntegrationDataUpdateInput: ["createdAt", "updatedAt", "data", "integration", "proto"],
  IntegrationDataCreateManyInput: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  IntegrationDataUpdateManyMutationInput: ["createdAt", "updatedAt", "data"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumAuthProviderFilter: ["equals", "in", "notIn", "not"],
  ProtoListRelationFilter: ["every", "some", "none"],
  IntegrationListRelationFilter: ["every", "some", "none"],
  ProtoOrderByRelationAggregateInput: ["_count"],
  IntegrationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumAuthProviderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  IntegrationDataListRelationFilter: ["every", "some", "none"],
  IntegrationDataOrderByRelationAggregateInput: ["_count"],
  ProtoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoAvgOrderByAggregateInput: ["id", "userId"],
  ProtoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoSumOrderByAggregateInput: ["id", "userId"],
  EnumIntegrationProviderNullableFilter: ["equals", "in", "notIn", "not"],
  EnumIntegrationStatusNullableFilter: ["equals", "in", "notIn", "not"],
  IntegrationCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationAvgOrderByAggregateInput: ["id", "userId"],
  IntegrationMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationSumOrderByAggregateInput: ["id", "userId"],
  EnumIntegrationProviderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumIntegrationStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntegrationRelationFilter: ["is", "isNot"],
  ProtoRelationFilter: ["is", "isNot"],
  IntegrationDataCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  IntegrationDataAvgOrderByAggregateInput: ["id", "integrationId", "protoId"],
  IntegrationDataMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  IntegrationDataMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  IntegrationDataSumOrderByAggregateInput: ["id", "integrationId", "protoId"],
  ProtoCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntegrationCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumAuthProviderFieldUpdateOperationsInput: ["set"],
  ProtoUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntegrationUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProtosInput: ["create", "connectOrCreate", "connect"],
  IntegrationDataCreateNestedManyWithoutProtoInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutProtosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntegrationDataUpdateManyWithoutProtoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutIntegrationsInput: ["create", "connectOrCreate", "connect"],
  IntegrationDataCreateNestedManyWithoutIntegrationInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableEnumIntegrationProviderFieldUpdateOperationsInput: ["set"],
  NullableEnumIntegrationStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutIntegrationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntegrationDataUpdateManyWithoutIntegrationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntegrationCreateNestedOneWithoutIntegrationDataInput: ["create", "connectOrCreate", "connect"],
  ProtoCreateNestedOneWithoutIntegrationDataInput: ["create", "connectOrCreate", "connect"],
  IntegrationUpdateOneRequiredWithoutIntegrationDataNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProtoUpdateOneRequiredWithoutIntegrationDataNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumAuthProviderFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumAuthProviderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumIntegrationProviderNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationStatusNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationProviderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumIntegrationStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProtoCreateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString", "IntegrationData"],
  ProtoCreateOrConnectWithoutUserInput: ["where", "create"],
  ProtoCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  IntegrationCreateWithoutUserInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "IntegrationData"],
  IntegrationCreateOrConnectWithoutUserInput: ["where", "create"],
  IntegrationCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProtoUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProtoUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProtoUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ProtoScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  IntegrationUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  IntegrationUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  IntegrationScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  UserCreateWithoutProtosInput: ["createdAt", "email", "name", "picture", "provider", "integrations"],
  UserCreateOrConnectWithoutProtosInput: ["where", "create"],
  IntegrationDataCreateWithoutProtoInput: ["createdAt", "updatedAt", "data", "integration"],
  IntegrationDataCreateOrConnectWithoutProtoInput: ["where", "create"],
  IntegrationDataCreateManyProtoInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProtosInput: ["update", "create"],
  UserUpdateWithoutProtosInput: ["createdAt", "email", "name", "picture", "provider", "integrations"],
  IntegrationDataUpsertWithWhereUniqueWithoutProtoInput: ["where", "update", "create"],
  IntegrationDataUpdateWithWhereUniqueWithoutProtoInput: ["where", "data"],
  IntegrationDataUpdateManyWithWhereWithoutProtoInput: ["where", "data"],
  IntegrationDataScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "data", "integrationId", "protoId"],
  UserCreateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "provider", "protos"],
  UserCreateOrConnectWithoutIntegrationsInput: ["where", "create"],
  IntegrationDataCreateWithoutIntegrationInput: ["createdAt", "updatedAt", "data", "proto"],
  IntegrationDataCreateOrConnectWithoutIntegrationInput: ["where", "create"],
  IntegrationDataCreateManyIntegrationInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutIntegrationsInput: ["update", "create"],
  UserUpdateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "provider", "protos"],
  IntegrationDataUpsertWithWhereUniqueWithoutIntegrationInput: ["where", "update", "create"],
  IntegrationDataUpdateWithWhereUniqueWithoutIntegrationInput: ["where", "data"],
  IntegrationDataUpdateManyWithWhereWithoutIntegrationInput: ["where", "data"],
  IntegrationCreateWithoutIntegrationDataInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  IntegrationCreateOrConnectWithoutIntegrationDataInput: ["where", "create"],
  ProtoCreateWithoutIntegrationDataInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  ProtoCreateOrConnectWithoutIntegrationDataInput: ["where", "create"],
  IntegrationUpsertWithoutIntegrationDataInput: ["update", "create"],
  IntegrationUpdateWithoutIntegrationDataInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  ProtoUpsertWithoutIntegrationDataInput: ["update", "create"],
  ProtoUpdateWithoutIntegrationDataInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  ProtoCreateManyUserInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationCreateManyUserInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status"],
  ProtoUpdateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString", "IntegrationData"],
  IntegrationUpdateWithoutUserInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "IntegrationData"],
  IntegrationDataCreateManyProtoInput: ["id", "createdAt", "updatedAt", "data", "integrationId"],
  IntegrationDataUpdateWithoutProtoInput: ["createdAt", "updatedAt", "data", "integration"],
  IntegrationDataCreateManyIntegrationInput: ["id", "createdAt", "updatedAt", "data", "protoId"],
  IntegrationDataUpdateWithoutIntegrationInput: ["createdAt", "updatedAt", "data", "proto"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}


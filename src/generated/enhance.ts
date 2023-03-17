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
  IntegrationDataOnProtos: crudResolvers.IntegrationDataOnProtosCrudResolver,
  IntegrationData: crudResolvers.IntegrationDataCrudResolver,
  Integration: crudResolvers.IntegrationCrudResolver
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
  IntegrationDataOnProtos: {
    aggregateIntegrationDataOnProtos: actionResolvers.AggregateIntegrationDataOnProtosResolver,
    createManyIntegrationDataOnProtos: actionResolvers.CreateManyIntegrationDataOnProtosResolver,
    createOneIntegrationDataOnProtos: actionResolvers.CreateOneIntegrationDataOnProtosResolver,
    deleteManyIntegrationDataOnProtos: actionResolvers.DeleteManyIntegrationDataOnProtosResolver,
    deleteOneIntegrationDataOnProtos: actionResolvers.DeleteOneIntegrationDataOnProtosResolver,
    findFirstIntegrationDataOnProtos: actionResolvers.FindFirstIntegrationDataOnProtosResolver,
    findFirstIntegrationDataOnProtosOrThrow: actionResolvers.FindFirstIntegrationDataOnProtosOrThrowResolver,
    findManyIntegrationDataOnProtos: actionResolvers.FindManyIntegrationDataOnProtosResolver,
    findUniqueIntegrationDataOnProtos: actionResolvers.FindUniqueIntegrationDataOnProtosResolver,
    findUniqueIntegrationDataOnProtosOrThrow: actionResolvers.FindUniqueIntegrationDataOnProtosOrThrowResolver,
    groupByIntegrationDataOnProtos: actionResolvers.GroupByIntegrationDataOnProtosResolver,
    updateManyIntegrationDataOnProtos: actionResolvers.UpdateManyIntegrationDataOnProtosResolver,
    updateOneIntegrationDataOnProtos: actionResolvers.UpdateOneIntegrationDataOnProtosResolver,
    upsertOneIntegrationDataOnProtos: actionResolvers.UpsertOneIntegrationDataOnProtosResolver
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
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Proto: ["aggregateProto", "createManyProto", "createOneProto", "deleteManyProto", "deleteOneProto", "findFirstProto", "findFirstProtoOrThrow", "protos", "proto", "getProto", "groupByProto", "updateManyProto", "updateOneProto", "upsertOneProto"],
  IntegrationDataOnProtos: ["aggregateIntegrationDataOnProtos", "createManyIntegrationDataOnProtos", "createOneIntegrationDataOnProtos", "deleteManyIntegrationDataOnProtos", "deleteOneIntegrationDataOnProtos", "findFirstIntegrationDataOnProtos", "findFirstIntegrationDataOnProtosOrThrow", "findManyIntegrationDataOnProtos", "findUniqueIntegrationDataOnProtos", "findUniqueIntegrationDataOnProtosOrThrow", "groupByIntegrationDataOnProtos", "updateManyIntegrationDataOnProtos", "updateOneIntegrationDataOnProtos", "upsertOneIntegrationDataOnProtos"],
  IntegrationData: ["aggregateIntegrationData", "createManyIntegrationData", "createOneIntegrationData", "deleteManyIntegrationData", "deleteOneIntegrationData", "findFirstIntegrationData", "findFirstIntegrationDataOrThrow", "findManyIntegrationData", "findUniqueIntegrationData", "findUniqueIntegrationDataOrThrow", "groupByIntegrationData", "updateManyIntegrationData", "updateOneIntegrationData", "upsertOneIntegrationData"],
  Integration: ["aggregateIntegration", "createManyIntegration", "createOneIntegration", "deleteManyIntegration", "deleteOneIntegration", "findFirstIntegration", "findFirstIntegrationOrThrow", "integrations", "integration", "getIntegration", "groupByIntegration", "updateManyIntegration", "updateOneIntegration", "upsertOneIntegration"]
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
  AggregateIntegrationDataOnProtosArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyIntegrationDataOnProtosArgs: ["data", "skipDuplicates"],
  CreateOneIntegrationDataOnProtosArgs: ["data"],
  DeleteManyIntegrationDataOnProtosArgs: ["where"],
  DeleteOneIntegrationDataOnProtosArgs: ["where"],
  FindFirstIntegrationDataOnProtosArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstIntegrationDataOnProtosOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIntegrationDataOnProtosArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueIntegrationDataOnProtosArgs: ["where"],
  FindUniqueIntegrationDataOnProtosOrThrowArgs: ["where"],
  GroupByIntegrationDataOnProtosArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyIntegrationDataOnProtosArgs: ["data", "where"],
  UpdateOneIntegrationDataOnProtosArgs: ["data", "where"],
  UpsertOneIntegrationDataOnProtosArgs: ["where", "create", "update"],
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
  UpsertOneIntegrationDataArgs: ["where", "create", "update"],
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
  UpsertOneIntegrationArgs: ["where", "create", "update"]
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
  IntegrationDataOnProtos: relationResolvers.IntegrationDataOnProtosRelationsResolver,
  IntegrationData: relationResolvers.IntegrationDataRelationsResolver,
  Integration: relationResolvers.IntegrationRelationsResolver
};
const relationResolversInfo = {
  User: ["protos", "integrations"],
  Proto: ["user", "integrations"],
  IntegrationDataOnProtos: ["proto", "integrationData"],
  IntegrationData: ["protos"],
  Integration: ["user"]
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
  IntegrationDataOnProtos: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationData: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  Integration: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"]
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
  AggregateIntegrationDataOnProtos: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationDataOnProtosGroupBy: ["protoId", "integrationDataId", "assignedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIntegrationData: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationDataGroupBy: ["id", "createdAt", "updatedAt", "externalId", "search", "data", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIntegration: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationGroupBy: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["protos", "integrations"],
  UserCountAggregate: ["id", "createdAt", "email", "name", "picture", "provider", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserMaxAggregate: ["id", "createdAt", "email", "name", "picture", "provider"],
  ProtoCount: ["integrations"],
  ProtoCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_all"],
  ProtoAvgAggregate: ["id", "userId"],
  ProtoSumAggregate: ["id", "userId"],
  ProtoMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationDataOnProtosCountAggregate: ["protoId", "integrationDataId", "assignedAt", "_all"],
  IntegrationDataOnProtosAvgAggregate: ["protoId", "integrationDataId"],
  IntegrationDataOnProtosSumAggregate: ["protoId", "integrationDataId"],
  IntegrationDataOnProtosMinAggregate: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosMaxAggregate: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataCount: ["protos"],
  IntegrationDataCountAggregate: ["id", "createdAt", "updatedAt", "externalId", "search", "data", "_all"],
  IntegrationDataAvgAggregate: ["id"],
  IntegrationDataSumAggregate: ["id"],
  IntegrationDataMinAggregate: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataMaxAggregate: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationCountAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_all"],
  IntegrationAvgAggregate: ["id", "userId"],
  IntegrationSumAggregate: ["id", "userId"],
  IntegrationMinAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationMaxAggregate: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"]
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
  ProtoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId", "integrations"],
  ProtoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId", "integrations"],
  ProtoWhereUniqueInput: ["id"],
  ProtoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationDataOnProtosWhereInput: ["AND", "OR", "NOT", "proto", "protoId", "integrationData", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosOrderByWithRelationInput: ["proto", "protoId", "integrationData", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosWhereUniqueInput: ["protoId_integrationDataId"],
  IntegrationDataOnProtosOrderByWithAggregationInput: ["protoId", "integrationDataId", "assignedAt", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationDataOnProtosScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "protoId", "integrationDataId", "assignedAt"],
  IntegrationDataWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "search", "data", "protos"],
  IntegrationDataOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data", "protos"],
  IntegrationDataWhereUniqueInput: ["id"],
  IntegrationDataOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationDataScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId"],
  IntegrationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId"],
  IntegrationWhereUniqueInput: ["id"],
  IntegrationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  UserCreateInput: ["createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserUpdateInput: ["createdAt", "email", "name", "picture", "provider", "protos", "integrations"],
  UserCreateManyInput: ["id", "createdAt", "email", "name", "picture", "provider"],
  UserUpdateManyMutationInput: ["createdAt", "email", "name", "picture", "provider"],
  ProtoCreateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user", "integrations"],
  ProtoUpdateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user", "integrations"],
  ProtoCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationDataOnProtosCreateInput: ["proto", "integrationData", "assignedAt"],
  IntegrationDataOnProtosUpdateInput: ["proto", "integrationData", "assignedAt"],
  IntegrationDataOnProtosCreateManyInput: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosUpdateManyMutationInput: ["assignedAt"],
  IntegrationDataCreateInput: ["createdAt", "updatedAt", "externalId", "search", "data", "protos"],
  IntegrationDataUpdateInput: ["createdAt", "updatedAt", "externalId", "search", "data", "protos"],
  IntegrationDataCreateManyInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataUpdateManyMutationInput: ["createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationCreateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  IntegrationUpdateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  IntegrationCreateManyInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationUpdateManyMutationInput: ["createdAt", "updatedAt", "externalId", "provider", "status"],
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
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntegrationDataOnProtosListRelationFilter: ["every", "some", "none"],
  IntegrationDataOnProtosOrderByRelationAggregateInput: ["_count"],
  ProtoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoAvgOrderByAggregateInput: ["id", "userId"],
  ProtoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoSumOrderByAggregateInput: ["id", "userId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProtoRelationFilter: ["is", "isNot"],
  IntegrationDataRelationFilter: ["is", "isNot"],
  IntegrationDataOnProtosProtoIdIntegrationDataIdCompoundUniqueInput: ["protoId", "integrationDataId"],
  IntegrationDataOnProtosCountOrderByAggregateInput: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosAvgOrderByAggregateInput: ["protoId", "integrationDataId"],
  IntegrationDataOnProtosMaxOrderByAggregateInput: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosMinOrderByAggregateInput: ["protoId", "integrationDataId", "assignedAt"],
  IntegrationDataOnProtosSumOrderByAggregateInput: ["protoId", "integrationDataId"],
  IntegrationDataCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataAvgOrderByAggregateInput: ["id"],
  IntegrationDataMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataSumOrderByAggregateInput: ["id"],
  EnumIntegrationProviderNullableFilter: ["equals", "in", "notIn", "not"],
  EnumIntegrationStatusNullableFilter: ["equals", "in", "notIn", "not"],
  IntegrationCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationAvgOrderByAggregateInput: ["id", "userId"],
  IntegrationMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationSumOrderByAggregateInput: ["id", "userId"],
  EnumIntegrationProviderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  EnumIntegrationStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
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
  IntegrationDataOnProtosCreateNestedManyWithoutProtoInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutProtosNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IntegrationDataOnProtosUpdateManyWithoutProtoNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProtoCreateNestedOneWithoutIntegrationsInput: ["create", "connectOrCreate", "connect"],
  IntegrationDataCreateNestedOneWithoutProtosInput: ["create", "connectOrCreate", "connect"],
  ProtoUpdateOneRequiredWithoutIntegrationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntegrationDataUpdateOneRequiredWithoutProtosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntegrationDataOnProtosCreateNestedManyWithoutIntegrationDataInput: ["create", "connectOrCreate", "createMany", "connect"],
  IntegrationDataOnProtosUpdateManyWithoutIntegrationDataNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutIntegrationsInput: ["create", "connectOrCreate", "connect"],
  NullableEnumIntegrationProviderFieldUpdateOperationsInput: ["set"],
  NullableEnumIntegrationStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutIntegrationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumIntegrationProviderNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationStatusNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationProviderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumIntegrationStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProtoCreateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString", "integrations"],
  ProtoCreateOrConnectWithoutUserInput: ["where", "create"],
  ProtoCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  IntegrationCreateWithoutUserInput: ["createdAt", "updatedAt", "externalId", "provider", "status"],
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
  IntegrationDataOnProtosCreateWithoutProtoInput: ["integrationData", "assignedAt"],
  IntegrationDataOnProtosCreateOrConnectWithoutProtoInput: ["where", "create"],
  IntegrationDataOnProtosCreateManyProtoInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProtosInput: ["update", "create"],
  UserUpdateWithoutProtosInput: ["createdAt", "email", "name", "picture", "provider", "integrations"],
  IntegrationDataOnProtosUpsertWithWhereUniqueWithoutProtoInput: ["where", "update", "create"],
  IntegrationDataOnProtosUpdateWithWhereUniqueWithoutProtoInput: ["where", "data"],
  IntegrationDataOnProtosUpdateManyWithWhereWithoutProtoInput: ["where", "data"],
  IntegrationDataOnProtosScalarWhereInput: ["AND", "OR", "NOT", "protoId", "integrationDataId", "assignedAt"],
  ProtoCreateWithoutIntegrationsInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  ProtoCreateOrConnectWithoutIntegrationsInput: ["where", "create"],
  IntegrationDataCreateWithoutProtosInput: ["createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataCreateOrConnectWithoutProtosInput: ["where", "create"],
  ProtoUpsertWithoutIntegrationsInput: ["update", "create"],
  ProtoUpdateWithoutIntegrationsInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  IntegrationDataUpsertWithoutProtosInput: ["update", "create"],
  IntegrationDataUpdateWithoutProtosInput: ["createdAt", "updatedAt", "externalId", "search", "data"],
  IntegrationDataOnProtosCreateWithoutIntegrationDataInput: ["proto", "assignedAt"],
  IntegrationDataOnProtosCreateOrConnectWithoutIntegrationDataInput: ["where", "create"],
  IntegrationDataOnProtosCreateManyIntegrationDataInputEnvelope: ["data", "skipDuplicates"],
  IntegrationDataOnProtosUpsertWithWhereUniqueWithoutIntegrationDataInput: ["where", "update", "create"],
  IntegrationDataOnProtosUpdateWithWhereUniqueWithoutIntegrationDataInput: ["where", "data"],
  IntegrationDataOnProtosUpdateManyWithWhereWithoutIntegrationDataInput: ["where", "data"],
  UserCreateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "provider", "protos"],
  UserCreateOrConnectWithoutIntegrationsInput: ["where", "create"],
  UserUpsertWithoutIntegrationsInput: ["update", "create"],
  UserUpdateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "provider", "protos"],
  ProtoCreateManyUserInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationCreateManyUserInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status"],
  ProtoUpdateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString", "integrations"],
  IntegrationUpdateWithoutUserInput: ["createdAt", "updatedAt", "externalId", "provider", "status"],
  IntegrationDataOnProtosCreateManyProtoInput: ["integrationDataId", "assignedAt"],
  IntegrationDataOnProtosUpdateWithoutProtoInput: ["integrationData", "assignedAt"],
  IntegrationDataOnProtosCreateManyIntegrationDataInput: ["protoId", "assignedAt"],
  IntegrationDataOnProtosUpdateWithoutIntegrationDataInput: ["proto", "assignedAt"]
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


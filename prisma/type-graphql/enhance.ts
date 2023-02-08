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
  Integration: crudResolvers.IntegrationCrudResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  },
  Proto: {
    proto: actionResolvers.FindUniqueProtoResolver,
    findFirstProto: actionResolvers.FindFirstProtoResolver,
    protos: actionResolvers.FindManyProtoResolver,
    createProto: actionResolvers.CreateProtoResolver,
    createManyProto: actionResolvers.CreateManyProtoResolver,
    deleteProto: actionResolvers.DeleteProtoResolver,
    updateProto: actionResolvers.UpdateProtoResolver,
    deleteManyProto: actionResolvers.DeleteManyProtoResolver,
    updateManyProto: actionResolvers.UpdateManyProtoResolver,
    upsertProto: actionResolvers.UpsertProtoResolver,
    aggregateProto: actionResolvers.AggregateProtoResolver,
    groupByProto: actionResolvers.GroupByProtoResolver
  },
  Integration: {
    integration: actionResolvers.FindUniqueIntegrationResolver,
    findFirstIntegration: actionResolvers.FindFirstIntegrationResolver,
    integrations: actionResolvers.FindManyIntegrationResolver,
    createIntegration: actionResolvers.CreateIntegrationResolver,
    createManyIntegration: actionResolvers.CreateManyIntegrationResolver,
    deleteIntegration: actionResolvers.DeleteIntegrationResolver,
    updateIntegration: actionResolvers.UpdateIntegrationResolver,
    deleteManyIntegration: actionResolvers.DeleteManyIntegrationResolver,
    updateManyIntegration: actionResolvers.UpdateManyIntegrationResolver,
    upsertIntegration: actionResolvers.UpsertIntegrationResolver,
    aggregateIntegration: actionResolvers.AggregateIntegrationResolver,
    groupByIntegration: actionResolvers.GroupByIntegrationResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Proto: ["proto", "findFirstProto", "protos", "createProto", "createManyProto", "deleteProto", "updateProto", "deleteManyProto", "updateManyProto", "upsertProto", "aggregateProto", "groupByProto"],
  Integration: ["integration", "findFirstIntegration", "integrations", "createIntegration", "createManyIntegration", "deleteIntegration", "updateIntegration", "deleteManyIntegration", "updateManyIntegration", "upsertIntegration", "aggregateIntegration", "groupByIntegration"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProtoArgs: ["where"],
  FindFirstProtoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProtoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProtoArgs: ["data"],
  CreateManyProtoArgs: ["data", "skipDuplicates"],
  DeleteProtoArgs: ["where"],
  UpdateProtoArgs: ["data", "where"],
  DeleteManyProtoArgs: ["where"],
  UpdateManyProtoArgs: ["data", "where"],
  UpsertProtoArgs: ["where", "create", "update"],
  AggregateProtoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProtoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueIntegrationArgs: ["where"],
  FindFirstIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateIntegrationArgs: ["data"],
  CreateManyIntegrationArgs: ["data", "skipDuplicates"],
  DeleteIntegrationArgs: ["where"],
  UpdateIntegrationArgs: ["data", "where"],
  DeleteManyIntegrationArgs: ["where"],
  UpdateManyIntegrationArgs: ["data", "where"],
  UpsertIntegrationArgs: ["where", "create", "update"],
  AggregateIntegrationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByIntegrationArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  Integration: relationResolvers.IntegrationRelationsResolver
};
const relationResolversInfo = {
  User: ["protos", "integrations"],
  Proto: ["user"],
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
  User: ["id", "createdAt", "email", "name", "picture"],
  Proto: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
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
  UserGroupBy: ["id", "createdAt", "email", "name", "picture", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoGroupBy: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateIntegration: ["_count", "_avg", "_sum", "_min", "_max"],
  IntegrationGroupBy: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["protos", "integrations"],
  UserCountAggregate: ["id", "createdAt", "email", "name", "picture", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "email", "name", "picture"],
  UserMaxAggregate: ["id", "createdAt", "email", "name", "picture"],
  ProtoCountAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_all"],
  ProtoAvgAggregate: ["id", "userId"],
  ProtoSumAggregate: ["id", "userId"],
  ProtoMinAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMaxAggregate: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "picture", "protos", "integrations"],
  UserOrderByWithRelationInput: ["id", "createdAt", "email", "name", "picture", "protos", "integrations"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "email", "name", "picture", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "picture"],
  ProtoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId"],
  ProtoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "user", "userId"],
  ProtoWhereUniqueInput: ["id"],
  ProtoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  IntegrationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId"],
  IntegrationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "user", "userId"],
  IntegrationWhereUniqueInput: ["id"],
  IntegrationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  IntegrationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  UserCreateInput: ["createdAt", "email", "name", "picture", "protos", "integrations"],
  UserUpdateInput: ["createdAt", "email", "name", "picture", "protos", "integrations"],
  UserCreateManyInput: ["id", "createdAt", "email", "name", "picture"],
  UserUpdateManyMutationInput: ["createdAt", "email", "name", "picture"],
  ProtoCreateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  ProtoUpdateInput: ["createdAt", "updatedAt", "title", "description", "dateString", "user"],
  ProtoCreateManyInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationCreateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  IntegrationUpdateInput: ["createdAt", "updatedAt", "externalId", "provider", "status", "user"],
  IntegrationCreateManyInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status", "userId"],
  IntegrationUpdateManyMutationInput: ["createdAt", "updatedAt", "externalId", "provider", "status"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ProtoListRelationFilter: ["every", "some", "none"],
  IntegrationListRelationFilter: ["every", "some", "none"],
  ProtoOrderByRelationAggregateInput: ["_count"],
  IntegrationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "email", "name", "picture"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserRelationFilter: ["is", "isNot"],
  ProtoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoAvgOrderByAggregateInput: ["id", "userId"],
  ProtoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString", "userId"],
  ProtoSumOrderByAggregateInput: ["id", "userId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
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
  ProtoUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntegrationUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProtosInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutProtosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutIntegrationsInput: ["create", "connectOrCreate", "connect"],
  NullableEnumIntegrationProviderFieldUpdateOperationsInput: ["set"],
  NullableEnumIntegrationStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutIntegrationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumIntegrationProviderNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationStatusNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumIntegrationProviderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumIntegrationStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProtoCreateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString"],
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
  UserCreateWithoutProtosInput: ["createdAt", "email", "name", "picture", "integrations"],
  UserCreateOrConnectWithoutProtosInput: ["where", "create"],
  UserUpsertWithoutProtosInput: ["update", "create"],
  UserUpdateWithoutProtosInput: ["createdAt", "email", "name", "picture", "integrations"],
  UserCreateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "protos"],
  UserCreateOrConnectWithoutIntegrationsInput: ["where", "create"],
  UserUpsertWithoutIntegrationsInput: ["update", "create"],
  UserUpdateWithoutIntegrationsInput: ["createdAt", "email", "name", "picture", "protos"],
  ProtoCreateManyUserInput: ["id", "createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationCreateManyUserInput: ["id", "createdAt", "updatedAt", "externalId", "provider", "status"],
  ProtoUpdateWithoutUserInput: ["createdAt", "updatedAt", "title", "description", "dateString"],
  IntegrationUpdateWithoutUserInput: ["createdAt", "updatedAt", "externalId", "provider", "status"]
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


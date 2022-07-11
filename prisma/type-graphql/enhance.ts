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
  ProtoProp: crudResolvers.ProtoPropCrudResolver
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
  ProtoProp: {
    protoProp: actionResolvers.FindUniqueProtoPropResolver,
    findFirstProtoProp: actionResolvers.FindFirstProtoPropResolver,
    protoProps: actionResolvers.FindManyProtoPropResolver,
    createProtoProp: actionResolvers.CreateProtoPropResolver,
    createManyProtoProp: actionResolvers.CreateManyProtoPropResolver,
    deleteProtoProp: actionResolvers.DeleteProtoPropResolver,
    updateProtoProp: actionResolvers.UpdateProtoPropResolver,
    deleteManyProtoProp: actionResolvers.DeleteManyProtoPropResolver,
    updateManyProtoProp: actionResolvers.UpdateManyProtoPropResolver,
    upsertProtoProp: actionResolvers.UpsertProtoPropResolver,
    aggregateProtoProp: actionResolvers.AggregateProtoPropResolver,
    groupByProtoProp: actionResolvers.GroupByProtoPropResolver
  }
};
const crudResolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Proto: ["proto", "findFirstProto", "protos", "createProto", "createManyProto", "deleteProto", "updateProto", "deleteManyProto", "updateManyProto", "upsertProto", "aggregateProto", "groupByProto"],
  ProtoProp: ["protoProp", "findFirstProtoProp", "protoProps", "createProtoProp", "createManyProtoProp", "deleteProtoProp", "updateProtoProp", "deleteManyProtoProp", "updateManyProtoProp", "upsertProtoProp", "aggregateProtoProp", "groupByProtoProp"]
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
  FindUniqueProtoPropArgs: ["where"],
  FindFirstProtoPropArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProtoPropArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProtoPropArgs: ["data"],
  CreateManyProtoPropArgs: ["data", "skipDuplicates"],
  DeleteProtoPropArgs: ["where"],
  UpdateProtoPropArgs: ["data", "where"],
  DeleteManyProtoPropArgs: ["where"],
  UpdateManyProtoPropArgs: ["data", "where"],
  UpsertProtoPropArgs: ["where", "create", "update"],
  AggregateProtoPropArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProtoPropArgs: ["where", "orderBy", "by", "having", "take", "skip"]
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
  ProtoProp: relationResolvers.ProtoPropRelationsResolver
};
const relationResolversInfo = {
  User: ["protos"],
  Proto: ["user", "props"],
  ProtoProp: ["proto"]
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
  User: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  Proto: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoProp: ["id", "createdAt", "updatedAt", "name", "type", "protoId"]
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
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoGroupBy: ["id", "createdAt", "updatedAt", "title", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProtoProp: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoPropGroupBy: ["id", "createdAt", "updatedAt", "name", "type", "protoId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["protos"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  ProtoCount: ["props"],
  ProtoCountAggregate: ["id", "createdAt", "updatedAt", "title", "userId", "_all"],
  ProtoAvgAggregate: ["id", "userId"],
  ProtoSumAggregate: ["id", "userId"],
  ProtoMinAggregate: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoMaxAggregate: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoPropCountAggregate: ["id", "createdAt", "updatedAt", "name", "type", "protoId", "_all"],
  ProtoPropAvgAggregate: ["id", "protoId"],
  ProtoPropSumAggregate: ["id", "protoId"],
  ProtoPropMinAggregate: ["id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoPropMaxAggregate: ["id", "createdAt", "updatedAt", "name", "type", "protoId"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "protos"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "protos"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  ProtoWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "user", "userId", "props"],
  ProtoOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "user", "userId", "props"],
  ProtoWhereUniqueInput: ["id"],
  ProtoOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "userId"],
  ProtoPropWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "type", "proto", "protoId"],
  ProtoPropOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "type", "proto", "protoId"],
  ProtoPropWhereUniqueInput: ["id"],
  ProtoPropOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "type", "protoId", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoPropScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "type", "protoId"],
  UserCreateInput: ["createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "protos"],
  UserUpdateInput: ["createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password", "protos"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  ProtoCreateInput: ["createdAt", "updatedAt", "title", "user", "props"],
  ProtoUpdateInput: ["createdAt", "updatedAt", "title", "user", "props"],
  ProtoCreateManyInput: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoUpdateManyMutationInput: ["createdAt", "updatedAt", "title"],
  ProtoPropCreateInput: ["createdAt", "updatedAt", "name", "type", "proto"],
  ProtoPropUpdateInput: ["createdAt", "updatedAt", "name", "type", "proto"],
  ProtoPropCreateManyInput: ["id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoPropUpdateManyMutationInput: ["createdAt", "updatedAt", "name", "type"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ProtoListRelationFilter: ["every", "some", "none"],
  ProtoOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  ProtoPropListRelationFilter: ["every", "some", "none"],
  ProtoPropOrderByRelationAggregateInput: ["_count"],
  ProtoCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoAvgOrderByAggregateInput: ["id", "userId"],
  ProtoMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "userId"],
  ProtoSumOrderByAggregateInput: ["id", "userId"],
  EnumProtoPropEnumFilter: ["equals", "in", "notIn", "not"],
  ProtoRelationFilter: ["is", "isNot"],
  ProtoPropCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoPropAvgOrderByAggregateInput: ["id", "protoId"],
  ProtoPropMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoPropMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoPropSumOrderByAggregateInput: ["id", "protoId"],
  EnumProtoPropEnumWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProtoCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  ProtoUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutProtosInput: ["create", "connectOrCreate", "connect"],
  ProtoPropCreateNestedManyWithoutProtoInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutProtosInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProtoPropUpdateManyWithoutProtoInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProtoCreateNestedOneWithoutPropsInput: ["create", "connectOrCreate", "connect"],
  EnumProtoPropEnumFieldUpdateOperationsInput: ["set"],
  ProtoUpdateOneRequiredWithoutPropsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumProtoPropEnumFilter: ["equals", "in", "notIn", "not"],
  NestedEnumProtoPropEnumWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ProtoCreateWithoutUserInput: ["createdAt", "updatedAt", "title", "props"],
  ProtoCreateOrConnectWithoutUserInput: ["where", "create"],
  ProtoCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProtoUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProtoUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProtoUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ProtoScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "userId"],
  UserCreateWithoutProtosInput: ["createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  UserCreateOrConnectWithoutProtosInput: ["where", "create"],
  ProtoPropCreateWithoutProtoInput: ["createdAt", "updatedAt", "name", "type"],
  ProtoPropCreateOrConnectWithoutProtoInput: ["where", "create"],
  ProtoPropCreateManyProtoInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProtosInput: ["update", "create"],
  UserUpdateWithoutProtosInput: ["createdAt", "updatedAt", "email", "username", "firstName", "lastName", "password"],
  ProtoPropUpsertWithWhereUniqueWithoutProtoInput: ["where", "update", "create"],
  ProtoPropUpdateWithWhereUniqueWithoutProtoInput: ["where", "data"],
  ProtoPropUpdateManyWithWhereWithoutProtoInput: ["where", "data"],
  ProtoPropScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "type", "protoId"],
  ProtoCreateWithoutPropsInput: ["createdAt", "updatedAt", "title", "user"],
  ProtoCreateOrConnectWithoutPropsInput: ["where", "create"],
  ProtoUpsertWithoutPropsInput: ["update", "create"],
  ProtoUpdateWithoutPropsInput: ["createdAt", "updatedAt", "title", "user"],
  ProtoCreateManyUserInput: ["id", "createdAt", "updatedAt", "title"],
  ProtoUpdateWithoutUserInput: ["createdAt", "updatedAt", "title", "props"],
  ProtoPropCreateManyProtoInput: ["id", "createdAt", "updatedAt", "name", "type"],
  ProtoPropUpdateWithoutProtoInput: ["createdAt", "updatedAt", "name", "type"]
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


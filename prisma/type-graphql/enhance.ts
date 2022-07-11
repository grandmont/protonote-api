import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
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
  User: ["id", "email", "name", "password"],
  Proto: ["id", "name"],
  ProtoProp: ["id", "name", "type"]
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
  UserGroupBy: ["id", "email", "name", "password", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProto: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProtoProp: ["_count", "_avg", "_sum", "_min", "_max"],
  ProtoPropGroupBy: ["id", "name", "type", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "email", "name", "password", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name", "password"],
  UserMaxAggregate: ["id", "email", "name", "password"],
  ProtoCountAggregate: ["id", "name", "_all"],
  ProtoAvgAggregate: ["id"],
  ProtoSumAggregate: ["id"],
  ProtoMinAggregate: ["id", "name"],
  ProtoMaxAggregate: ["id", "name"],
  ProtoPropCountAggregate: ["id", "name", "type", "_all"],
  ProtoPropAvgAggregate: ["id"],
  ProtoPropSumAggregate: ["id"],
  ProtoPropMinAggregate: ["id", "name", "type"],
  ProtoPropMaxAggregate: ["id", "name", "type"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "password"],
  UserOrderByWithRelationInput: ["id", "email", "name", "password"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "password", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "password"],
  ProtoWhereInput: ["AND", "OR", "NOT", "id", "name"],
  ProtoOrderByWithRelationInput: ["id", "name"],
  ProtoWhereUniqueInput: ["id"],
  ProtoOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  ProtoPropWhereInput: ["AND", "OR", "NOT", "id", "name", "type"],
  ProtoPropOrderByWithRelationInput: ["id", "name", "type"],
  ProtoPropWhereUniqueInput: ["id"],
  ProtoPropOrderByWithAggregationInput: ["id", "name", "type", "_count", "_avg", "_max", "_min", "_sum"],
  ProtoPropScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "type"],
  UserCreateInput: ["email", "name", "password"],
  UserUpdateInput: ["email", "name", "password"],
  UserCreateManyInput: ["id", "email", "name", "password"],
  UserUpdateManyMutationInput: ["email", "name", "password"],
  ProtoCreateInput: ["name"],
  ProtoUpdateInput: ["name"],
  ProtoCreateManyInput: ["id", "name"],
  ProtoUpdateManyMutationInput: ["name"],
  ProtoPropCreateInput: ["name", "type"],
  ProtoPropUpdateInput: ["name", "type"],
  ProtoPropCreateManyInput: ["id", "name", "type"],
  ProtoPropUpdateManyMutationInput: ["name", "type"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "password"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "password"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "password"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  ProtoCountOrderByAggregateInput: ["id", "name"],
  ProtoAvgOrderByAggregateInput: ["id"],
  ProtoMaxOrderByAggregateInput: ["id", "name"],
  ProtoMinOrderByAggregateInput: ["id", "name"],
  ProtoSumOrderByAggregateInput: ["id"],
  EnumProtoPropTypeFilter: ["equals", "in", "notIn", "not"],
  ProtoPropCountOrderByAggregateInput: ["id", "name", "type"],
  ProtoPropAvgOrderByAggregateInput: ["id"],
  ProtoPropMaxOrderByAggregateInput: ["id", "name", "type"],
  ProtoPropMinOrderByAggregateInput: ["id", "name", "type"],
  ProtoPropSumOrderByAggregateInput: ["id"],
  EnumProtoPropTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumProtoPropTypeFieldUpdateOperationsInput: ["set"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumProtoPropTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumProtoPropTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"]
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


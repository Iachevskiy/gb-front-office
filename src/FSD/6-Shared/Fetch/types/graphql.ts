/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type InnerOrder = {
  direction: OrderDirection;
  /** Priority of current field */
  priority: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteFromTestModel: Array<TestModelItem>;
  insertIntoTestModel: Array<TestModelItem>;
  insertIntoTestModelSingle?: Maybe<TestModelItem>;
  updateTestModel: Array<TestModelItem>;
};


export type MutationDeleteFromTestModelArgs = {
  where?: InputMaybe<TestModelFilters>;
};


export type MutationInsertIntoTestModelArgs = {
  values: Array<TestModelInsertInput>;
};


export type MutationInsertIntoTestModelSingleArgs = {
  values: TestModelInsertInput;
};


export type MutationUpdateTestModelArgs = {
  set: TestModelUpdateInput;
  where?: InputMaybe<TestModelFilters>;
};

/** Order by direction */
export enum OrderDirection {
  /** Ascending order */
  Asc = 'asc',
  /** Descending order */
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  testModel: Array<TestModelSelectItem>;
  testModelSingle?: Maybe<TestModelSelectItem>;
};


export type QueryTestModelArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TestModelOrderBy>;
  where?: InputMaybe<TestModelFilters>;
};


export type QueryTestModelSingleArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TestModelOrderBy>;
  where?: InputMaybe<TestModelFilters>;
};

export type TestModelFilters = {
  OR?: InputMaybe<Array<TestModelFiltersOr>>;
  id?: InputMaybe<TestModelIdFilters>;
  name?: InputMaybe<TestModelNameFilters>;
};

export type TestModelFiltersOr = {
  id?: InputMaybe<TestModelIdFilters>;
  name?: InputMaybe<TestModelNameFilters>;
};

export type TestModelIdFilters = {
  OR?: InputMaybe<Array<TestModelIdfiltersOr>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TestModelIdfiltersOr = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['Int']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TestModelInsertInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type TestModelItem = {
  __typename?: 'TestModelItem';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TestModelNameFilters = {
  OR?: InputMaybe<Array<TestModelNamefiltersOr>>;
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TestModelNamefiltersOr = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  inArray?: InputMaybe<Array<Scalars['String']['input']>>;
  isNotNull?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notIlike?: InputMaybe<Scalars['String']['input']>;
  /** Array<undefined> */
  notInArray?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type TestModelOrderBy = {
  id?: InputMaybe<InnerOrder>;
  name?: InputMaybe<InnerOrder>;
};

export type TestModelSelectItem = {
  __typename?: 'TestModelSelectItem';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TestModelUpdateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TestModelQueryVariables = Exact<{ [key: string]: never; }>;


export type TestModelQuery = { __typename?: 'Query', testModel: Array<{ __typename?: 'TestModelSelectItem', id: number, name: string }> };


export const TestModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testModel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TestModelQuery, TestModelQueryVariables>;
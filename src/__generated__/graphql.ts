/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ContentKeyResponseType = {
  __typename?: 'ContentKeyResponseType';
  content?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  contentKeys?: Maybe<Array<Maybe<ContentKeyResponseType>>>;
};


export type QueryContentKeysArgs = {
  keyList: Array<InputMaybe<Scalars['String']>>;
  lang: Scalars['String'];
};

export type GetContentKeysQueryVariables = Exact<{
  keyList: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  lang: Scalars['String'];
}>;


export type GetContentKeysQuery = { __typename?: 'Query', contentKeys?: Array<{ __typename?: 'ContentKeyResponseType', key?: string | null, content?: string | null } | null> | null };


export const GetContentKeysDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetContentKeys"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyList"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentKeys"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyList"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyList"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetContentKeysQuery, GetContentKeysQueryVariables>;
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type ActiveRecordInterface = {
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};


export type Listing = ActiveRecordInterface & {
  __typename?: 'Listing';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  auth: Scalars['Boolean'];
  viewer: User;
};

export type User = ActiveRecordInterface & {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  listings: Array<Listing>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'auth'>
);


export const AuthDocument = gql`
    query auth {
  auth
}
    `;

/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthQuery(baseOptions?: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
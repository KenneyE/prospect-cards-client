import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
  Upload: any;
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

export type ListingInput = {
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  description: Scalars['String'];
  images: Array<Scalars['Upload']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  saveListing: Maybe<SaveListingPayload>;
};


export type MutationSaveListingArgs = {
  listing: ListingInput;
};

export type Query = {
  __typename?: 'Query';
  auth: Scalars['Boolean'];
  viewer: User;
};

/** Autogenerated return type of SaveListing */
export type SaveListingPayload = {
  __typename?: 'SaveListingPayload';
  message: Scalars['String'];
  viewer: User;
};

export type StripeAccount = ActiveRecordInterface & {
  __typename?: 'StripeAccount';
  chargesEnabled: Scalars['Boolean'];
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  onboardingLink: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};


export type User = ActiveRecordInterface & {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  listings: Array<Listing>;
  stripeAccount: StripeAccount;
  updatedAt: Scalars['ISO8601DateTime'];
};


export type UserStripeAccountArgs = {
  refresh?: Maybe<Scalars['Boolean']>;
};

export type SaveListingMutationVariables = Exact<{
  listing: ListingInput;
}>;


export type SaveListingMutation = (
  { __typename?: 'Mutation' }
  & { saveListing: Maybe<(
    { __typename?: 'SaveListingPayload' }
    & Pick<SaveListingPayload, 'message'>
    & { viewer: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  )> }
);

export type StripeAccountQueryVariables = Exact<{
  refresh?: Maybe<Scalars['Boolean']>;
}>;


export type StripeAccountQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { stripeAccount: (
      { __typename?: 'StripeAccount' }
      & Pick<StripeAccount, 'id' | 'chargesEnabled' | 'onboardingLink'>
    ) }
  ) }
);

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'auth'>
);


export const SaveListingDocument = gql`
    mutation saveListing($listing: ListingInput!) {
  saveListing(listing: $listing) {
    viewer {
      id
    }
    message
  }
}
    `;
export type SaveListingMutationFn = ApolloReactCommon.MutationFunction<SaveListingMutation, SaveListingMutationVariables>;

/**
 * __useSaveListingMutation__
 *
 * To run a mutation, you first call `useSaveListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveListingMutation, { data, loading, error }] = useSaveListingMutation({
 *   variables: {
 *      listing: // value for 'listing'
 *   },
 * });
 */
export function useSaveListingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveListingMutation, SaveListingMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveListingMutation, SaveListingMutationVariables>(SaveListingDocument, baseOptions);
      }
export type SaveListingMutationHookResult = ReturnType<typeof useSaveListingMutation>;
export type SaveListingMutationResult = ApolloReactCommon.MutationResult<SaveListingMutation>;
export type SaveListingMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveListingMutation, SaveListingMutationVariables>;
export const StripeAccountDocument = gql`
    query stripeAccount($refresh: Boolean) {
  viewer {
    id
    stripeAccount(refresh: $refresh) {
      id
      chargesEnabled
      onboardingLink
    }
  }
}
    `;

/**
 * __useStripeAccountQuery__
 *
 * To run a query within a React component, call `useStripeAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useStripeAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStripeAccountQuery({
 *   variables: {
 *      refresh: // value for 'refresh'
 *   },
 * });
 */
export function useStripeAccountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StripeAccountQuery, StripeAccountQueryVariables>) {
        return ApolloReactHooks.useQuery<StripeAccountQuery, StripeAccountQueryVariables>(StripeAccountDocument, baseOptions);
      }
export function useStripeAccountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StripeAccountQuery, StripeAccountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StripeAccountQuery, StripeAccountQueryVariables>(StripeAccountDocument, baseOptions);
        }
export type StripeAccountQueryHookResult = ReturnType<typeof useStripeAccountQuery>;
export type StripeAccountLazyQueryHookResult = ReturnType<typeof useStripeAccountLazyQuery>;
export type StripeAccountQueryResult = ApolloReactCommon.QueryResult<StripeAccountQuery, StripeAccountQueryVariables>;
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
export function useAuthQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        return ApolloReactHooks.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
      }
export function useAuthLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, baseOptions);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = ApolloReactCommon.QueryResult<AuthQuery, AuthQueryVariables>;
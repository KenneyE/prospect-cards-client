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

/** Autogenerated return type of AcceptOffer */
export type AcceptOfferPayload = {
  __typename?: 'AcceptOfferPayload';
  message: Scalars['String'];
  viewer: User;
};

export type ActiveRecordInterface = {
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Category = ActiveRecordInterface & {
  __typename?: 'Category';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Grader = ActiveRecordInterface & {
  __typename?: 'Grader';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};


export type Listing = ActiveRecordInterface & {
  __typename?: 'Listing';
  createdAt: Scalars['ISO8601DateTime'];
  description: Scalars['String'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  imageUrls: Array<Scalars['String']>;
  offers: Array<Offer>;
  player: Player;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ListingInput = {
  id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  description: Scalars['String'];
  images: Array<Scalars['Upload']>;
  categoryId: Scalars['Int'];
  productTypeId: Scalars['Int'];
  manufacturerId: Scalars['Int'];
  setTypeId: Scalars['Int'];
  graderId: Scalars['Int'];
};

export enum ListingStatusEnum {
  /** available */
  Available = 'available',
  /** pending_sale */
  PendingSale = 'pending_sale',
  /** sold */
  Sold = 'sold'
}

export type Manufacturer = ActiveRecordInterface & {
  __typename?: 'Manufacturer';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Membership = ActiveRecordInterface & {
  __typename?: 'Membership';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  price: Scalars['Int'];
  term: Scalars['String'];
  token: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptOffer: Maybe<AcceptOfferPayload>;
  saveListing: Maybe<SaveListingPayload>;
  saveOffer: Maybe<SaveOfferPayload>;
  saveProfilePicture: Maybe<SaveProfilePicturePayload>;
  trackInterest: Maybe<TrackInterestPayload>;
};


export type MutationAcceptOfferArgs = {
  offerId: Scalars['Int'];
};


export type MutationSaveListingArgs = {
  listing: ListingInput;
  player: PlayerInput;
};


export type MutationSaveOfferArgs = {
  offer: OfferInput;
};


export type MutationSaveProfilePictureArgs = {
  picture: Scalars['Upload'];
};


export type MutationTrackInterestArgs = {
  listingId: Scalars['Int'];
};

export type Offer = ActiveRecordInterface & {
  __typename?: 'Offer';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  price: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type OfferInput = {
  price: Scalars['Int'];
  listingId: Scalars['Int'];
};

export type Player = ActiveRecordInterface & {
  __typename?: 'Player';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type PlayerInput = {
  name: Scalars['String'];
};

export type Product = ActiveRecordInterface & {
  __typename?: 'Product';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Query = {
  __typename?: 'Query';
  auth: Scalars['Boolean'];
  categories: Array<Category>;
  graders: Array<Grader>;
  listing: Listing;
  manufacturers: Array<Manufacturer>;
  productTypes: Array<Product>;
  setTypes: Array<Set>;
  stripeCheckoutSessionId: Scalars['String'];
  viewer: User;
};


export type QueryListingArgs = {
  id: Scalars['Int'];
};


export type QueryStripeCheckoutSessionIdArgs = {
  price?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SaveListing */
export type SaveListingPayload = {
  __typename?: 'SaveListingPayload';
  message: Scalars['String'];
  viewer: User;
};

/** Autogenerated return type of SaveOffer */
export type SaveOfferPayload = {
  __typename?: 'SaveOfferPayload';
  message: Scalars['String'];
  paymentIntentId: Scalars['String'];
};

/** Autogenerated return type of SaveProfilePicture */
export type SaveProfilePicturePayload = {
  __typename?: 'SaveProfilePicturePayload';
  message: Scalars['String'];
  viewer: User;
};

export type Set = ActiveRecordInterface & {
  __typename?: 'Set';
  createdAt: Scalars['ISO8601DateTime'];
  errors: Array<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
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

/** Autogenerated return type of TrackInterest */
export type TrackInterestPayload = {
  __typename?: 'TrackInterestPayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};


export type User = ActiveRecordInterface & {
  __typename?: 'User';
  availableMemberships: Array<Membership>;
  createdAt: Scalars['ISO8601DateTime'];
  email: Scalars['String'];
  errors: Array<Scalars['String']>;
  hasActiveSubscription: Scalars['Boolean'];
  hasPaymentMethod: Scalars['Boolean'];
  id: Scalars['Int'];
  listings: Array<Listing>;
  players: Array<Player>;
  profilePictureUrl: Scalars['String'];
  stripeAccount: StripeAccount;
  updatedAt: Scalars['ISO8601DateTime'];
};


export type UserListingsArgs = {
  status?: Maybe<ListingStatusEnum>;
};


export type UserPlayersArgs = {
  name?: Maybe<Scalars['String']>;
};


export type UserStripeAccountArgs = {
  refresh?: Maybe<Scalars['Boolean']>;
};

export type PlayerFragment = (
  { __typename?: 'Player' }
  & Pick<Player, 'id' | 'name'>
);

export type ListingFragment = (
  { __typename?: 'Listing' }
  & Pick<Listing, 'id' | 'title' | 'description' | 'imageUrls'>
  & { player: (
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'name'>
  ), offers: Array<(
    { __typename?: 'Offer' }
    & Pick<Offer, 'id' | 'price'>
  )> }
);

export type TrackInterestMutationVariables = Exact<{
  listingId: Scalars['Int'];
}>;


export type TrackInterestMutation = (
  { __typename?: 'Mutation' }
  & { trackInterest: Maybe<(
    { __typename?: 'TrackInterestPayload' }
    & Pick<TrackInterestPayload, 'success'>
  )> }
);

export type SaveListingMutationVariables = Exact<{
  listing: ListingInput;
  player: PlayerInput;
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

export type SaveOfferMutationVariables = Exact<{
  offer: OfferInput;
}>;


export type SaveOfferMutation = (
  { __typename?: 'Mutation' }
  & { saveOffer: Maybe<(
    { __typename?: 'SaveOfferPayload' }
    & Pick<SaveOfferPayload, 'paymentIntentId'>
  )> }
);

export type AcceptOfferMutationVariables = Exact<{
  offerId: Scalars['Int'];
}>;


export type AcceptOfferMutation = (
  { __typename?: 'Mutation' }
  & { acceptOffer: Maybe<(
    { __typename?: 'AcceptOfferPayload' }
    & Pick<AcceptOfferPayload, 'message'>
    & { viewer: (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    ) }
  )> }
);

export type SaveProfilePictureMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type SaveProfilePictureMutation = (
  { __typename?: 'Mutation' }
  & { saveProfilePicture: Maybe<(
    { __typename?: 'SaveProfilePicturePayload' }
    & { viewer: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'profilePictureUrl'>
    ) }
  )> }
);

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'profilePictureUrl'>
  ) }
);

export type AccountQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'hasActiveSubscription' | 'hasPaymentMethod'>
    & { stripeAccount: (
      { __typename?: 'StripeAccount' }
      & Pick<StripeAccount, 'id' | 'chargesEnabled' | 'onboardingLink'>
    ) }
  ) }
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

export type AddPaymentQueryVariables = Exact<{
  price?: Maybe<Scalars['String']>;
}>;


export type AddPaymentQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'stripeCheckoutSessionId'>
);

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'auth'>
);

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type PlayersQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type PlayersQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { players: Array<(
      { __typename?: 'Player' }
      & PlayerFragment
    )> }
  ) }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { availableMemberships: Array<(
      { __typename?: 'Membership' }
      & Pick<Membership, 'token' | 'price' | 'term'>
    )> }
  ) }
);

export type ListingQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ListingQuery = (
  { __typename?: 'Query' }
  & { listing: (
    { __typename?: 'Listing' }
    & Pick<Listing, 'id' | 'title' | 'description' | 'imageUrls'>
  ) }
);

export type NewListingFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewListingFieldsQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )>, productTypes: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
  )>, manufacturers: Array<(
    { __typename?: 'Manufacturer' }
    & Pick<Manufacturer, 'id' | 'name'>
  )>, setTypes: Array<(
    { __typename?: 'Set' }
    & Pick<Set, 'id' | 'name'>
  )>, graders: Array<(
    { __typename?: 'Grader' }
    & Pick<Grader, 'id' | 'name'>
  )> }
);

export type ListingsQueryVariables = Exact<{
  status?: Maybe<ListingStatusEnum>;
}>;


export type ListingsQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { listings: Array<(
      { __typename?: 'Listing' }
      & ListingFragment
    )> }
  ) }
);

export const PlayerFragmentDoc = gql`
    fragment player on Player {
  id
  name
}
    `;
export const ListingFragmentDoc = gql`
    fragment listing on Listing {
  id
  title
  description
  imageUrls
  player {
    id
    name
  }
  offers {
    id
    price
  }
}
    `;
export const TrackInterestDocument = gql`
    mutation trackInterest($listingId: Int!) {
  trackInterest(listingId: $listingId) {
    success
  }
}
    `;
export type TrackInterestMutationFn = ApolloReactCommon.MutationFunction<TrackInterestMutation, TrackInterestMutationVariables>;

/**
 * __useTrackInterestMutation__
 *
 * To run a mutation, you first call `useTrackInterestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackInterestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackInterestMutation, { data, loading, error }] = useTrackInterestMutation({
 *   variables: {
 *      listingId: // value for 'listingId'
 *   },
 * });
 */
export function useTrackInterestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TrackInterestMutation, TrackInterestMutationVariables>) {
        return ApolloReactHooks.useMutation<TrackInterestMutation, TrackInterestMutationVariables>(TrackInterestDocument, baseOptions);
      }
export type TrackInterestMutationHookResult = ReturnType<typeof useTrackInterestMutation>;
export type TrackInterestMutationResult = ApolloReactCommon.MutationResult<TrackInterestMutation>;
export type TrackInterestMutationOptions = ApolloReactCommon.BaseMutationOptions<TrackInterestMutation, TrackInterestMutationVariables>;
export const SaveListingDocument = gql`
    mutation saveListing($listing: ListingInput!, $player: PlayerInput!) {
  saveListing(listing: $listing, player: $player) {
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
 *      player: // value for 'player'
 *   },
 * });
 */
export function useSaveListingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveListingMutation, SaveListingMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveListingMutation, SaveListingMutationVariables>(SaveListingDocument, baseOptions);
      }
export type SaveListingMutationHookResult = ReturnType<typeof useSaveListingMutation>;
export type SaveListingMutationResult = ApolloReactCommon.MutationResult<SaveListingMutation>;
export type SaveListingMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveListingMutation, SaveListingMutationVariables>;
export const SaveOfferDocument = gql`
    mutation saveOffer($offer: OfferInput!) {
  saveOffer(offer: $offer) {
    paymentIntentId
  }
}
    `;
export type SaveOfferMutationFn = ApolloReactCommon.MutationFunction<SaveOfferMutation, SaveOfferMutationVariables>;

/**
 * __useSaveOfferMutation__
 *
 * To run a mutation, you first call `useSaveOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveOfferMutation, { data, loading, error }] = useSaveOfferMutation({
 *   variables: {
 *      offer: // value for 'offer'
 *   },
 * });
 */
export function useSaveOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveOfferMutation, SaveOfferMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveOfferMutation, SaveOfferMutationVariables>(SaveOfferDocument, baseOptions);
      }
export type SaveOfferMutationHookResult = ReturnType<typeof useSaveOfferMutation>;
export type SaveOfferMutationResult = ApolloReactCommon.MutationResult<SaveOfferMutation>;
export type SaveOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveOfferMutation, SaveOfferMutationVariables>;
export const AcceptOfferDocument = gql`
    mutation acceptOffer($offerId: Int!) {
  acceptOffer(offerId: $offerId) {
    viewer {
      id
    }
    message
  }
}
    `;
export type AcceptOfferMutationFn = ApolloReactCommon.MutationFunction<AcceptOfferMutation, AcceptOfferMutationVariables>;

/**
 * __useAcceptOfferMutation__
 *
 * To run a mutation, you first call `useAcceptOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptOfferMutation, { data, loading, error }] = useAcceptOfferMutation({
 *   variables: {
 *      offerId: // value for 'offerId'
 *   },
 * });
 */
export function useAcceptOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptOfferMutation, AcceptOfferMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptOfferMutation, AcceptOfferMutationVariables>(AcceptOfferDocument, baseOptions);
      }
export type AcceptOfferMutationHookResult = ReturnType<typeof useAcceptOfferMutation>;
export type AcceptOfferMutationResult = ApolloReactCommon.MutationResult<AcceptOfferMutation>;
export type AcceptOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptOfferMutation, AcceptOfferMutationVariables>;
export const SaveProfilePictureDocument = gql`
    mutation saveProfilePicture($picture: Upload!) {
  saveProfilePicture(picture: $picture) {
    viewer {
      id
      profilePictureUrl
    }
  }
}
    `;
export type SaveProfilePictureMutationFn = ApolloReactCommon.MutationFunction<SaveProfilePictureMutation, SaveProfilePictureMutationVariables>;

/**
 * __useSaveProfilePictureMutation__
 *
 * To run a mutation, you first call `useSaveProfilePictureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveProfilePictureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveProfilePictureMutation, { data, loading, error }] = useSaveProfilePictureMutation({
 *   variables: {
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useSaveProfilePictureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveProfilePictureMutation, SaveProfilePictureMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveProfilePictureMutation, SaveProfilePictureMutationVariables>(SaveProfilePictureDocument, baseOptions);
      }
export type SaveProfilePictureMutationHookResult = ReturnType<typeof useSaveProfilePictureMutation>;
export type SaveProfilePictureMutationResult = ApolloReactCommon.MutationResult<SaveProfilePictureMutation>;
export type SaveProfilePictureMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveProfilePictureMutation, SaveProfilePictureMutationVariables>;
export const ProfileDocument = gql`
    query profile {
  viewer {
    id
    email
    profilePictureUrl
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const AccountDocument = gql`
    query account {
  viewer {
    id
    hasActiveSubscription
    hasPaymentMethod
    stripeAccount {
      id
      chargesEnabled
      onboardingLink
    }
  }
}
    `;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AccountQuery, AccountQueryVariables>) {
        return ApolloReactHooks.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, baseOptions);
      }
export function useAccountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, baseOptions);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountQueryResult = ApolloReactCommon.QueryResult<AccountQuery, AccountQueryVariables>;
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
export const AddPaymentDocument = gql`
    query addPayment($price: String) {
  stripeCheckoutSessionId(price: $price)
}
    `;

/**
 * __useAddPaymentQuery__
 *
 * To run a query within a React component, call `useAddPaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddPaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddPaymentQuery({
 *   variables: {
 *      price: // value for 'price'
 *   },
 * });
 */
export function useAddPaymentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddPaymentQuery, AddPaymentQueryVariables>) {
        return ApolloReactHooks.useQuery<AddPaymentQuery, AddPaymentQueryVariables>(AddPaymentDocument, baseOptions);
      }
export function useAddPaymentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddPaymentQuery, AddPaymentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddPaymentQuery, AddPaymentQueryVariables>(AddPaymentDocument, baseOptions);
        }
export type AddPaymentQueryHookResult = ReturnType<typeof useAddPaymentQuery>;
export type AddPaymentLazyQueryHookResult = ReturnType<typeof useAddPaymentLazyQuery>;
export type AddPaymentQueryResult = ApolloReactCommon.QueryResult<AddPaymentQuery, AddPaymentQueryVariables>;
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
export const ViewerDocument = gql`
    query viewer {
  viewer {
    id
  }
}
    `;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
      }
export function useViewerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = ApolloReactCommon.QueryResult<ViewerQuery, ViewerQueryVariables>;
export const PlayersDocument = gql`
    query players($name: String) {
  viewer {
    id
    players(name: $name) {
      ...player
    }
  }
}
    ${PlayerFragmentDoc}`;

/**
 * __usePlayersQuery__
 *
 * To run a query within a React component, call `usePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayersQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePlayersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
        return ApolloReactHooks.useQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, baseOptions);
      }
export function usePlayersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, baseOptions);
        }
export type PlayersQueryHookResult = ReturnType<typeof usePlayersQuery>;
export type PlayersLazyQueryHookResult = ReturnType<typeof usePlayersLazyQuery>;
export type PlayersQueryResult = ApolloReactCommon.QueryResult<PlayersQuery, PlayersQueryVariables>;
export const ProductsDocument = gql`
    query products {
  viewer {
    id
    availableMemberships {
      token
      price
      term
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = ApolloReactCommon.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ListingDocument = gql`
    query listing($id: Int!) {
  listing(id: $id) {
    id
    title
    description
    imageUrls
  }
}
    `;

/**
 * __useListingQuery__
 *
 * To run a query within a React component, call `useListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListingQuery, ListingQueryVariables>) {
        return ApolloReactHooks.useQuery<ListingQuery, ListingQueryVariables>(ListingDocument, baseOptions);
      }
export function useListingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListingQuery, ListingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListingQuery, ListingQueryVariables>(ListingDocument, baseOptions);
        }
export type ListingQueryHookResult = ReturnType<typeof useListingQuery>;
export type ListingLazyQueryHookResult = ReturnType<typeof useListingLazyQuery>;
export type ListingQueryResult = ApolloReactCommon.QueryResult<ListingQuery, ListingQueryVariables>;
export const NewListingFieldsDocument = gql`
    query newListingFields {
  categories {
    id
    name
  }
  productTypes {
    id
    name
  }
  manufacturers {
    id
    name
  }
  setTypes {
    id
    name
  }
  graders {
    id
    name
  }
}
    `;

/**
 * __useNewListingFieldsQuery__
 *
 * To run a query within a React component, call `useNewListingFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewListingFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewListingFieldsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNewListingFieldsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NewListingFieldsQuery, NewListingFieldsQueryVariables>) {
        return ApolloReactHooks.useQuery<NewListingFieldsQuery, NewListingFieldsQueryVariables>(NewListingFieldsDocument, baseOptions);
      }
export function useNewListingFieldsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewListingFieldsQuery, NewListingFieldsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NewListingFieldsQuery, NewListingFieldsQueryVariables>(NewListingFieldsDocument, baseOptions);
        }
export type NewListingFieldsQueryHookResult = ReturnType<typeof useNewListingFieldsQuery>;
export type NewListingFieldsLazyQueryHookResult = ReturnType<typeof useNewListingFieldsLazyQuery>;
export type NewListingFieldsQueryResult = ApolloReactCommon.QueryResult<NewListingFieldsQuery, NewListingFieldsQueryVariables>;
export const ListingsDocument = gql`
    query listings($status: ListingStatusEnum) {
  viewer {
    id
    listings(status: $status) {
      ...listing
    }
  }
}
    ${ListingFragmentDoc}`;

/**
 * __useListingsQuery__
 *
 * To run a query within a React component, call `useListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingsQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useListingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
        return ApolloReactHooks.useQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, baseOptions);
      }
export function useListingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListingsQuery, ListingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListingsQuery, ListingsQueryVariables>(ListingsDocument, baseOptions);
        }
export type ListingsQueryHookResult = ReturnType<typeof useListingsQuery>;
export type ListingsLazyQueryHookResult = ReturnType<typeof useListingsLazyQuery>;
export type ListingsQueryResult = ApolloReactCommon.QueryResult<ListingsQuery, ListingsQueryVariables>;
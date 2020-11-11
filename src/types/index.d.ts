import { ListingFragment } from 'types/graphql'

declare type ElasticListing = ListingFragment & {
  _id: number;
  isFavorited?: boolean;
};

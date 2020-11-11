import React from 'react'
import Dumb from './FavoriteListingToggle'
import { useToggleFavoriteMutation } from 'types/graphql'

interface Props {
  listingId: number;
  isFavorited: boolean;
}
const FavoriteListingToggle = ({
  listingId,
  isFavorited,
}: Props): JSX.Element => {
  const [toggle] = useToggleFavoriteMutation({
    variables: { listingId, isFavorited: !isFavorited },
    optimisticResponse: {
      toggleFavorite: {
        __typename: 'ToggleFavoritePayload',
        listing: {
          id: listingId,
          isFavorited: !isFavorited,
        },
      },
    },
  })

  const handleClick = () => {
    toggle()
  }
  return <Dumb handleClick={ handleClick } isFavorited={ isFavorited } />
}

export default FavoriteListingToggle

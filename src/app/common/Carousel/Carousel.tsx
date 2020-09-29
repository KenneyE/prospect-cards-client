import React from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { ListingFragment } from 'types/graphql'
import useStyles from './styles'

interface Props {
  listing: ListingFragment;
}

const Carousel = ({ listing }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <ReactCarousel
      showThumbs={ false }
      showStatus={ false }
      infiniteLoop
      centerMode={ listing.imageUrls.length > 1 }
      showIndicators={ listing.imageUrls.length > 1 }
    >
      {listing.imageUrls.map((image: string, ind: number) => {
        return (
          <img
            key={ image }
            src={ image }
            alt={ `${listing.player.name} No. ${ind}` }
            className={ classes.img }
          />
        )
      })}
    </ReactCarousel>
  )
}

export default Carousel

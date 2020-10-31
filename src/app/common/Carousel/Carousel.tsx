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
    <div className={ classes.root }>
      <ReactCarousel
        showThumbs={ false }
        showStatus={ false }
        infiniteLoop
        centerMode={ listing.images.length > 1 }
        showIndicators={ listing.images.length > 1 }
      >
        {listing.images.map((image, ind: number) => {
          return (
            <img
              key={ image.id }
              src={ image.url }
              alt={ `${listing.player.name} No. ${ind}` }
              className={ classes.img }
            />
          )
        })}
      </ReactCarousel>
    </div>
  )
}

export default Carousel

import React from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import { ListingFragment } from 'types/graphql'
import Image from 'app/common/Image'
import useStyles from './styles'

interface Props {
  listing: ListingFragment;
  height: number;
}

const Carousel = ({ listing, height }: Props): JSX.Element => {
  const classes = useStyles({ height })

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
            <Image
              key={ image.id }
              image={ image }
              alt={ `${listing.player} No. ${ind}` }
              className={ classes.img }
            />
          )
        })}
      </ReactCarousel>
    </div>
  )
}

export default Carousel

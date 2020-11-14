import React from 'react'
import { Scalars } from 'types/graphql'
import NewListingThumb from 'app/listings/NewListingThumb'
import { Typography } from '@material-ui/core'

interface Props {
  images: Scalars['Upload'][];
  handleDelete: (documentName: string) => () => void;
}

const NewListingThumbs = ({ images, handleDelete }: Props): JSX.Element => {
  const thumbs = images.map((image: Scalars['Upload'], index) => {
    return (
      <NewListingThumb
        key={ image.document.name }
        image={ image }
        handleDelete={ handleDelete }
        index={ index + 1 }
        thumbIndex={ index + 1 }
      />
    )
  })
  return (
    <div>
      {thumbs}
      {images.length ? (
        <Typography variant='caption'>Drag to sort</Typography>
      ) : null}
    </div>
  )
}

export default NewListingThumbs

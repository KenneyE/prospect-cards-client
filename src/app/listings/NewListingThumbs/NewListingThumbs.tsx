import React from 'react'
import { Scalars } from 'types/graphql'
import NewListingThumb from 'app/listings/NewListingThumb'
import * as Sortable from 'react-sortable-hoc'
import { Typography } from '@material-ui/core'

interface Props {
  images: Scalars['Upload'][];
  handleDelete: (documentName: string) => () => void;
  onSortEnd: Sortable.SortEndHandler;
}

const NewListingThumbs = ({ images, handleDelete }: Props): JSX.Element => {
  const thumbs = images.map((image: Scalars['Upload'], index) => {
    return (
      <NewListingThumb
        key={ image.document.name }
        image={ image }
        handleDelete={ handleDelete }
        index={ index }
        thumbIndex={ index }
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

export default Sortable.SortableContainer(NewListingThumbs)

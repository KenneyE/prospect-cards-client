import React from 'react'
import { Scalars } from 'types/graphql'
import NewListingThumb from 'app/listings/NewListingThumb'
import * as Sortable from 'react-sortable-hoc'

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
      />
    )
  })
  return <div>{thumbs}</div>
}

export default Sortable.SortableContainer(NewListingThumbs)

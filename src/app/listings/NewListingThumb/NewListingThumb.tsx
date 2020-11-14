import React from 'react'
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close'
import { Scalars } from 'types/graphql'
import { SortableElement } from 'react-sortable-hoc'
interface Props {
  image: Scalars['Upload'];
  handleDelete: (documentName: string) => () => void;
  thumbIndex: number;
}

const NewListingThumb = ({
  image: { document, preview },
  handleDelete,
  thumbIndex,
}: Props): JSX.Element => {
  const classes = useStyles()

  // https://github.com/STRML/react-draggable/issues/69#issuecomment-115372058
  return (
    <div
      className={ `${thumbIndex === 0 ? classes.primaryThumb : classes.thumb}` }
    >
      <div className={ classes.thumbInner }>
        <CloseIcon onClick={ handleDelete(document.name) } />
        <img
          alt={ document.name }
          src={ preview }
          className={ classes.thumbImg }
          draggable='false'
        />
      </div>
    </div>
  )
}

export default SortableElement(NewListingThumb)

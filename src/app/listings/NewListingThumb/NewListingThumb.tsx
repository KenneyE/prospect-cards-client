import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import useStyles from './styles'
import CloseIcon from '@material-ui/icons/Close'
import { Scalars } from 'types/graphql'
import { SortableElement } from 'react-sortable-hoc'
import heic2any from 'heic2any'
import Spinner from 'app/common/Spinner'

interface Props {
  image: Scalars['Upload'];
  handleDelete: (documentName: string) => () => void;
  thumbIndex: number;
}

const getSrc = async(
  { document, preview }: Scalars['Upload'],
  setProcessing: Dispatch<SetStateAction<boolean>>,
): Promise<string> => {
  let src = preview

  if (document.type === 'image/heic') {
    setProcessing(true)
    await fetch(preview)
      .then((res) => res.blob())
      .then((blob) => heic2any({ blob }))
      .then((conversionResult) => {
        setProcessing(false)

        src = URL.createObjectURL(conversionResult)
      })
  }

  return src
}

const NewListingThumb = ({
  image,
  handleDelete,
  thumbIndex,
}: Props): JSX.Element => {
  const classes = useStyles()
  const { document } = image
  const [src, setSrc] = useState<string>()
  const [processing, setProcessing] = useState<boolean>(false)

  useEffect(() => {
    if (!src && !processing) {
      getSrc(image, setProcessing).then((src) => {
        setSrc(src)
      })
    }
  }, [image, src, setSrc, processing, setProcessing])

  // https://github.com/STRML/react-draggable/issues/69#issuecomment-115372058
  return (
    <div
      className={ `${thumbIndex === 0 ? classes.primaryThumb : classes.thumb}` }
    >
      <div className={ classes.thumbInner }>
        <CloseIcon onClick={ handleDelete(document.name) } />
        {processing ? (
          <div className={ classes.spinner }>
            <Spinner />
          </div>
        ) : (
          <img
            alt={ document.name }
            src={ src }
            className={ classes.thumbImg }
            draggable='false'
          />
        )}
      </div>
    </div>
  )
}

export default SortableElement(NewListingThumb)

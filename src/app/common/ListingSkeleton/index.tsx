import React from 'react'
import { Skeleton } from '@material-ui/lab'
import useCardStyles from 'app/listings/SearchResult/styles'

const ListingSkeletons = (): JSX.Element => {
  const cardClasses = useCardStyles()
  return (
    <div className={ cardClasses.resultCard }>
      <Skeleton variant='rect' width={ 210 } height={ 240 } />
      <Skeleton width='45%' />
      <Skeleton width='60%' />
    </div>
  )
}

export default ListingSkeletons

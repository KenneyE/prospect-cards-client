import React from 'react'
import { Skeleton } from '@material-ui/lab'

const FormSkeleton = (): JSX.Element => {
  return (
    <div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  )
}

export default FormSkeleton

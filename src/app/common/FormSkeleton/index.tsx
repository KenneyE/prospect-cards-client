import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { Button, TextField } from '@material-ui/core'

const FormSkeleton = (): JSX.Element => {
  const skel = (
    <Skeleton width='100%'>
      <TextField variant='outlined' margin='normal' />
    </Skeleton>
  )
  return (
    <div style={ { width: '100%' } }>
      {skel}
      {skel}
      {skel}
      {skel}
      <Skeleton>
        <Button variant='outlined'>Submit</Button>
      </Skeleton>
    </div>
  )
}

export default FormSkeleton

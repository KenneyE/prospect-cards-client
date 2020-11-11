import React from 'react'
import { ToggleFavoriteMutationFn } from 'types/graphql'
import { Button } from '@material-ui/core'

interface Props {
  handleClick: VoidFunction;
  isFavorited: boolean;
}

const ReportListingButton = ({
  handleClick,
  isFavorited,
}: Props): JSX.Element => {
  return <Button onClick={ handleClick }>{isFavorited ? 'Faved' : 'Not'}</Button>
}

export default ReportListingButton

import React from 'react'
import LoadingButton from 'app/common/LoadingButton'

interface Props {
  onClick: () => Promise<void>;
  loading: boolean;
}

const AcceptOfferButton = ({ onClick, loading }: Props): JSX.Element => {
  return (
    <LoadingButton
      variant='outlined'
      loading={ loading }
      onClick={ () => {
        onClick()
      } }
    >
      Accept
    </LoadingButton>
  )
}

export default AcceptOfferButton

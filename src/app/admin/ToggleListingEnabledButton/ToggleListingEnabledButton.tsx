import React from 'react'
import LoadingButton from 'app/common/LoadingButton'

interface Props {
  toggleEnabled: VoidFunction;
  text: string;
  loading: boolean;
}

const ToggleListingEnabledButton = ({
  toggleEnabled,
  text,
  loading,
}: Props): JSX.Element => {
  return (
    <LoadingButton
      loading={ loading }
      onClick={ () => {
        toggleEnabled()
      } }
    >
      {text}
    </LoadingButton>
  )
}

export default ToggleListingEnabledButton

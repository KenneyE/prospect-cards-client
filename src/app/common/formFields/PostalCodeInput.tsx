import React from 'react'
import MaskedNumber, { Props } from './MaskedNumber'

const PostalCodeInput = (props: Props): JSX.Element => {
  return <MaskedNumber format='#####' { ...props } />
}

export default PostalCodeInput

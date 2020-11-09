import React from 'react'
import { SvgIcon } from '@material-ui/core'

const PlusIcon = (): JSX.Element => {
  return (
    <SvgIcon
      style={ { fontSize: 17 } }
      width='17'
      height='17'
      viewBox='0 0 17 17'
      fill='none'
    >
      <line y1='8.5' x2='17' y2='8.5' stroke='#1685FC' />
      <line x1='8.5' y1='2.18557e-08' x2='8.5' y2='17' stroke='#1685FC' />
    </SvgIcon>
  )
}

export default PlusIcon

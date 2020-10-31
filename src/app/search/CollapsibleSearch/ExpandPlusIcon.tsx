import React from 'react'
import { SvgIcon } from '@material-ui/core'

const ExpandPlusIcon = (): JSX.Element => {
  return (
    <SvgIcon>
      <svg
        width='17'
        height='17'
        viewBox='0 0 17 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='8.5' x2='17' y2='8.5' stroke='#1685FC' />
        <line x1='8.5' y1='2.18557e-08' x2='8.5' y2='17' stroke='#1685FC' />
      </svg>
    </SvgIcon>
  )
}

export default ExpandPlusIcon

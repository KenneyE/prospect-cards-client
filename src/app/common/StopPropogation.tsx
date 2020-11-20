import React from 'react'

interface Props {
  children: JSX.Element;
  className?: string;
}

const StopPropogation = ({ children, className }: Props): JSX.Element => {
  return (
    <span className={ className } onClick={ (e) => e.stopPropagation() }>
      {children}
    </span>
  )
}

export default StopPropogation

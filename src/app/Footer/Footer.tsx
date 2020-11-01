import React from 'react'
import useStyles from './styles'

const Footer = (): JSX.Element => {
  const classes = useStyles()

  return <div className={ classes.root }>Hello World</div>
}

export default Footer

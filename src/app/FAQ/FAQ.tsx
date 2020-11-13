import React from 'react'
import useStyles from './styles'

const FooterList = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={ classes.container }>How frequently is too frequently?</div>
  )
}

export default FooterList

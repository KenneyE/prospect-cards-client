import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import useStyles from './styles'

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AuthScreen = ({ children }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Card className={ classes.card }>
      <CardMedia
        className={ classes.media }
        image={ `${process.env.PUBLIC_URL}/logos/CanyonCompliance-orange.png` }
        title='Prospect Cards'
      />
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default AuthScreen

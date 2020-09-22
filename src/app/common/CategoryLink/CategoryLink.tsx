import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  category: string;
}

const CategoryLink = ({ category }: Props): JSX.Element => {
  return (
    <Button color='secondary' component={ Link } to={ `/c/${category}` }>
      {category}
    </Button>
  )
}

export default CategoryLink

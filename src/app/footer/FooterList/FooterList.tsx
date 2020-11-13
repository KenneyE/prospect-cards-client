import React from 'react'
import useStyles from './styles'
import { List, ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

export interface FooterListItem {
  label: string;
  path: string;
}

interface Props {
  items: FooterListItem[];
}

const FooterList = ({ items }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <List>
      {items.map((item) => (
        <ListItem className={ classes.listItem } key={ item.label }>
          <Link className={ classes.link } to={ item.path }>
            {item.label}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

export default FooterList

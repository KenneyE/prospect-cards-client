import React from 'react'
import {Button} from '@material-ui/core'

interface Props {
  onClick: VoidFunction;
}

const LogoutButton = ({ onClick }: Props): JSX.Element => {

  return <Button onClick={ onClick }>Log out</Button>
}

export default LogoutButton

import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface Props {
  message?: string;
}

const ConfirmEmail = ({ message }: Props): JSX.Element => {
  return (
    <>
      <Typography>{message}</Typography>
      <Button component={ Link } to='/'>
        Home
      </Button>
    </>
  )
}

export default ConfirmEmail

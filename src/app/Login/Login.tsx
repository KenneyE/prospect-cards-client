import React, { useState, SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { StyleRules } from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'

const useStyles = makeStyles(
  (theme: Theme): StyleRules => ({
    button: {
      marginTop: theme.spacing(),
    },
    card: {
      width: '400px',
      margin: 'auto',
    },
    media: {
      margin: 20,
      marginBottom: 0,
      height: 50,
    },
  }),
)

interface SignInResp {
  success: boolean;
  message: string;
}

const Login = (): JSX.Element => {
  const classes = useStyles()
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (name: string): ((event: SyntheticEvent) => void) => (
    event: SyntheticEvent,
  ): void => {
    const target = event.target as HTMLTextAreaElement

    setFields({
      ...fields,
      [name]: target.value,
    })
  }

  const handleSubmit = (event: SyntheticEvent): void => {
    if (loading) return

    event.preventDefault()
    setLoading(true)

    fetch(`${process.env.REACT_APP_API_URI}/users/sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: fields }),
    }).then((response): void => {
      setLoading(false)

      const token = response.headers.get('Authorization')
      if (response.status === 200 && token) {
        localStorage.setItem('fund-reporter-token', token)
        window.location.reload()
      } else {
        toast.error(response.statusText)
      }
    })
  }

  const { email, password } = fields

  return (
    <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
      <Typography>Login</Typography>
      <TextField
        id='user-email'
        label='Email'
        value={ email }
        onChange={ handleChange('email') }
        margin='normal'
        autoFocus
        fullWidth
      />
      <br />
      <TextField
        id='user-password'
        label='Password'
        type='password'
        value={ password }
        onChange={ handleChange('password') }
        margin='normal'
        fullWidth
      />
      <br />
      <Button
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        className={ classes.button }
      >
        Sign In
      </Button>
    </form>
  )
}

export default Login

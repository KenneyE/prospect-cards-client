import React, { useState, SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import TextField from '@material-ui/core/TextField'
import { toast } from 'react-toastify'
import LoadingButton from 'app/common/LoadingButton'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AuthScreen from 'app/common/AuthScreen'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props extends RouteComponentProps {
  refresh: () => Promise<void>;
}

const Login = ({ history, location, refresh }: Props): JSX.Element => {
  const [fields, setFields] = useState({
    login: '',
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
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 201 && token) {
          localStorage.setItem('prospect-cards-token', token)
          await refresh()
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const referrer = location.state && location.state.from
          history.push(referrer || '/')
        } else {
          toast.error(response.statusText)
        }
      },
    )
  }

  const { login, password } = fields

  return (
    <AuthScreen>
      <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
        <TextField
          id='user-login'
          label='Email or Username'
          value={ login }
          onChange={ handleChange('login') }
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
        <LoadingButton
          loading={ loading }
          fullWidth
          variant='contained'
          color='primary'
          type='submit'
        >
          Sign In
        </LoadingButton>
      </form>
      <br />
      <Button
        fullWidth
        variant='outlined'
        to='/forgot-password'
        component={ Link }
      >
        Forgot Password?
      </Button>
    </AuthScreen>
  )
}

export default Login

import React, { useState, SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import TextField from '@material-ui/core/TextField'
import { toast } from 'react-toastify'
import LoadingButton from 'app/common/LoadingButton'
import AuthScreen from 'app/common/AuthScreen'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props extends RouteComponentProps {
  refresh: () => Promise<void>;
  token: string;
}

const AcceptInvitation = ({
  history,
  location,
  refresh,
  token,
}: Props): JSX.Element => {
  const [fields, setFields] = useState({
    invitation_token: token,
    username: '',
    password: '',
    password_confirmation: '',
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

    fetch(`${process.env.REACT_APP_API_URI}/users/invitation.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: fields }),
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 204 && token) {
          localStorage.setItem('prospect-cards-token', token)
          await refresh()

          history.push('/')
        } else {
          toast.error(response.statusText)
        }
      },
    )
  }

  const { username, password, password_confirmation } = fields

  return (
    <AuthScreen>
      <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
        <TextField
          id='user-username'
          label='Username'
          value={ username }
          onChange={ handleChange('username') }
          margin='normal'
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
        <TextField
          id='user-password-confirmation'
          label='Password Confirmation'
          type='password'
          value={ password_confirmation }
          onChange={ handleChange('password_confirmation') }
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
          Join
        </LoadingButton>
      </form>
    </AuthScreen>
  )
}

export default AcceptInvitation

import React, { useState, SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField'
import {
  StyleRules,
} from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'

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

const Login = ({ history, location }: RouteComponentProps): JSX.Element => {
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

    fetch(`${process.env.REACT_APP_API_URI}/users/sign_in.json`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: fields }),
    })
      .then((response): Promise<SignInResp> => response.json())
      .then((data: SignInResp): void => {
        setLoading(false)

        if (data.success) {
          // @ts-ignore
          const referrer = location.state && location.state.from
          history.push(referrer || '/')
        } else {
          toast.error(data.message)
        }
      })
  }

  const { email, password } = fields

  return (
    <Card className={ classes.card }>
      <CardMedia
        className={ classes.media }
        image={ `${process.env.PUBLIC_URL}/logos/CanyonCompliance-orange.png` }
        title='Contemplative Reptile'
      />
      <CardContent>
        <form noValidate autoComplete='off' onSubmit={ handleSubmit }>
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
      </CardContent>
    </Card>
  )
}

export default Login

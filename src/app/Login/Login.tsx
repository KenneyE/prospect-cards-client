import React, { useState, SyntheticEvent } from 'react'
import { RouteComponentProps } from 'react-router'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import TextField from '@material-ui/core/TextField'
import { StyleRules } from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { toast } from 'react-toastify'
import { makeStyles } from '@material-ui/core/styles'
import LoadingButton from 'app/common/LoadingButton'

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

interface Props extends RouteComponentProps {
  refresh: () => Promise<void>;
}

const Login = ({ history, location, refresh }: Props): JSX.Element => {
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
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 201 && token) {
          localStorage.setItem('fund-reporter-token', token)
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

  const { email, password } = fields

  return (
    <Card className={ classes.card }>
      <CardMedia
        className={ classes.media }
        image={ `${process.env.PUBLIC_URL}/logos/CanyonCompliance-orange.png` }
        title='Prospect Cards'
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
          <LoadingButton
            loading={ loading }
            fullWidth
            variant='contained'
            color='primary'
            type='submit'
            className={ classes.button }
          >
            Sign In
          </LoadingButton>
        </form>
      </CardContent>
    </Card>
  )
}

export default Login

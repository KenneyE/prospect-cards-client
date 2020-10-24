import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import TextField from '@material-ui/core/TextField'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import LoadingButton from 'app/common/LoadingButton'
import AuthScreen from 'app/common/AuthScreen'
import { useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'

interface SignInResp {
  success: boolean;
  message: string;
}

interface Props extends RouteComponentProps {
  refresh: () => Promise<void>;
}

const FormSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(6, 'Must be at least 6 characters'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Passwords must match',
  ),
})

const Register = ({ history, location, refresh }: Props): JSX.Element => {
  const { token } = useParams<{ token: string }>()
  const initialValues = {
    password: '',
    password_confirmation: '',
    reset_password_token: token,
  }
  const [loading, setLoading] = useState(false)

  const handleSubmit = (variables: typeof initialValues): void => {
    if (loading) return

    setLoading(true)

    fetch(`${process.env.REACT_APP_API_URI}/users/password.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: variables }),
    }).then(
      async(response): Promise<void> => {
        setLoading(false)

        const token = response.headers.get('Authorization')
        if (response.status === 204 && token) {
          localStorage.setItem('prospect-cards-token', token)
          await refresh()
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const referrer = location.state && location.state.from
          history.push(referrer || '/')
        } else {
          toast.error(
            'Unable to reset password. This URL may be expired. Try requesting a new reset password link.',
          )
        }
      },
    )
  }

  return (
    <AuthScreen>
      <Formik
        initialValues={ initialValues }
        validationSchema={ FormSchema }
        onSubmit={ handleSubmit }
      >
        {({
          values: { password, password_confirmation },
          errors,
          touched,
          handleChange,
        }) => (
          <Form noValidate autoComplete='off'>
            <TextField
              name='password'
              label='Password'
              type='password'
              value={ password }
              onChange={ handleChange }
              margin='normal'
              fullWidth
            />
            {errors?.password && touched?.password ? (
              <div>{errors?.password}</div>
            ) : null}
            <br />
            <TextField
              name='password_confirmation'
              label='Password Confirmation'
              type='password'
              value={ password_confirmation }
              onChange={ handleChange }
              margin='normal'
              fullWidth
            />
            {errors?.password_confirmation && touched?.password_confirmation ? (
              <div>{errors?.password_confirmation}</div>
            ) : null}
            <br />
            <LoadingButton
              loading={ loading }
              fullWidth
              variant='contained'
              color='primary'
              type='submit'
            >
              Reset Password
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </AuthScreen>
  )
}

export default Register

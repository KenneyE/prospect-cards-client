import React from 'react'
import { ForgotPasswordMutationVariables } from 'types/graphql'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextField, Typography } from '@material-ui/core'
import LoadingButton from 'app/common/LoadingButton'
import AuthScreen from 'app/common/AuthScreen'

interface Props {
  handleSubmit: (variables: ForgotPasswordMutationVariables) => void;
  loading: boolean;
}

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Must be a valid email').required('Required'),
})

const ForgotPassword = ({ handleSubmit, loading }: Props): JSX.Element => {
  const initialValues: ForgotPasswordMutationVariables = {
    email: '',
  }

  return (
    <AuthScreen>
      <Formik<ForgotPasswordMutationVariables>
        validationSchema={ FormSchema }
        initialValues={ initialValues }
        onSubmit={ handleSubmit }
      >
        {({ values: { email }, handleChange, errors, touched }) => (
          <Form>
            <Typography variant='h3'>Forgot Password</Typography>
            <TextField
              name='email'
              label='Email'
              value={ email }
              onChange={ handleChange }
              margin='normal'
              autoFocus
              fullWidth
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <br />
            <LoadingButton
              loading={ loading }
              fullWidth
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </AuthScreen>
  )
}

export default ForgotPassword

import React from 'react'
import useStyles from './styles'
import {
  AddressQuery,
  SaveProfileMutationFn,
  SaveProfileMutationVariables,
} from 'types/graphql'
import { Form, Formik } from 'formik'
import { TextField } from '@material-ui/core'
import LoadingButton from 'app/common/LoadingButton'

export interface Props {
  mutate: SaveProfileMutationFn;
  loading: boolean;
  data: AddressQuery;
}

const AddressForm = ({
  mutate,
  loading,
  data: {
    viewer: { street1, street2, city, state, zip },
  },
}: Props): JSX.Element => {
  const classes = useStyles()

  const initialValues: SaveProfileMutationVariables = {
    profile: {
      street1: street1 || '',
      street2: street2 || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
    },
  }

  return (
    <Formik<SaveProfileMutationVariables>
      initialValues={ initialValues }
      onSubmit={ (variables) => mutate({ variables }) }
    >
      {({ values: { profile }, handleChange }): JSX.Element => (
        <Form>
          <TextField
            variant='outlined'
            id='profile.street1'
            label='Street 1'
            value={ profile.street1 }
            onChange={ handleChange }
            margin='normal'
            autoFocus
            fullWidth
          />
          <TextField
            variant='outlined'
            id='profile.street2'
            label='Street 2'
            value={ profile.street2 }
            onChange={ handleChange }
            margin='normal'
            autoFocus
            fullWidth
          />

          <TextField
            variant='outlined'
            id='profile.city'
            label='City'
            value={ profile.city }
            onChange={ handleChange }
            margin='normal'
            autoFocus
            fullWidth
          />

          <TextField
            variant='outlined'
            id='profile.state'
            label='State'
            value={ profile.state }
            onChange={ handleChange }
            margin='normal'
            autoFocus
            fullWidth
          />
          <TextField
            variant='outlined'
            id='profile.zip'
            label='Zip'
            value={ profile.zip }
            onChange={ handleChange }
            margin='normal'
            autoFocus
            fullWidth
          />
          <LoadingButton
            className={ classes.submit }
            variant='outlined'
            type='submit'
            loading={ loading }
          >
            Save
          </LoadingButton>
        </Form>
      )}
    </Formik>
  )
}

export default AddressForm

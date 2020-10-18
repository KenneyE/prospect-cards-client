import React from 'react'
import {
  EmailPreferenceInput,
  EmailPreferencesQuery,
  SaveEmailPreferencesMutationFn,
  SaveEmailPreferencesMutationVariables,
} from 'types/graphql'
import { Form, Formik } from 'formik'
import { titleize } from 'inflection'
import LoadingButton from 'app/common/LoadingButton'
import { Checkbox, FormControlLabel } from '@material-ui/core'

interface Props {
  data: EmailPreferencesQuery;
  onSubmit: SaveEmailPreferencesMutationFn;
  loading: boolean;
}

const EmailPreferences = ({
  data: {
    viewer: { emailPreferences },
  },
  onSubmit,
  loading,
}: Props): JSX.Element => {
  const initialValues: SaveEmailPreferencesMutationVariables = {
    emailPreferences: emailPreferences.map((pref) => ({
      category: pref.category,
      subscribed: pref.subscribed,
    })),
  }

  return (
    <Formik<SaveEmailPreferencesMutationVariables>
      initialValues={ initialValues }
      onSubmit={ (variables) => onSubmit({ variables }) }
    >
      {({ values: { emailPreferences }, handleChange }) => (
        <Form>
          {emailPreferences.map((value: EmailPreferenceInput, ind: number) => {
            const name = `emailPreferences.${ind}.subscribed`
            return (
              <FormControlLabel
                key={ value.category }
                control={
                  <Checkbox
                    name={ name }
                    checked={ value.subscribed }
                    onChange={ handleChange }
                  />
                }
                label={ titleize(value.category) }
              />
            )
          })}
          <LoadingButton loading={ loading }>Save Preferences</LoadingButton>
        </Form>
      )}
    </Formik>
  )
}

export default EmailPreferences

import React from 'react'
import Dumb from './EmailPreferences'
import {
  useEmailPreferencesQuery,
  useSaveEmailPreferencesMutation,
} from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'

const EmailPreferences = (): JSX.Element => {
  const { data, loading, error } = useEmailPreferencesQuery()
  const [
    savePreferences,
    { loading: saveLoading },
  ] = useSaveEmailPreferencesMutation()
  if (loading) return <Spinner />
  if (!data || error) return <ErrorMessage />

  return <Dumb data={ data } onSubmit={ savePreferences } loading={ saveLoading } />
}

export default EmailPreferences

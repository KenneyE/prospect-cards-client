import React from 'react'
import Dumb from './EmailPreferences'
import {
  useEmailPreferencesQuery,
  useSaveEmailPreferencesMutation,
} from 'types/graphql'
import Spinner from 'app/common/Spinner'
import ErrorMessage from 'app/common/ErrorMessage'
import { useParams } from 'react-router-dom'

const EmailPreferences = (): JSX.Element => {
  const { token } = useParams<{ token?: string }>()
  const { data, loading, error } = useEmailPreferencesQuery({
    variables: { token },
  })
  const [
    savePreferences,
    { loading: saveLoading },
  ] = useSaveEmailPreferencesMutation()
  if (loading) return <Spinner fullHeight />
  if (!data || error) return <ErrorMessage />

  return (
    <Dumb
      token={ token }
      data={ data }
      onSubmit={ savePreferences }
      loading={ saveLoading }
    />
  )
}

export default EmailPreferences

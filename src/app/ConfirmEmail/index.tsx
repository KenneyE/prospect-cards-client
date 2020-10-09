import React, { useEffect, useState } from 'react'
import { Maybe } from 'types/graphql'
import Dumb from './ConfirmEmail'
import { useParams } from 'react-router-dom'
import Spinner from 'app/common/Spinner'
import { toast } from 'react-toastify'

const ConfirmEmail = (): Maybe<JSX.Element> => {
  const { token } = useParams<{ token: string }>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URI}/users/confirmation.json?confirmation_token=${token}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(
        async(response): Promise<void> => {
          setLoading(false)

          const token = response.headers.get('Authorization')
          if (response.status === 201 && token) {
            localStorage.setItem('fund-reporter-token', token)
          } else {
            toast.error(response.statusText)
          }
        },
      )
      .catch((response) => {
        toast.error(response.statusText)
      })
  }, [token])

  if (loading) return <Spinner />

  return <Dumb loading={ loading } />
}

export default ConfirmEmail

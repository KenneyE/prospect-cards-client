import React from 'react'
import Dumb, { Props as DumbProps } from './AddressForm'
import MutationContainer from 'lib/MutationContainer'
import {
  SaveProfileMutation,
  SaveProfileMutationVariables,
  useAddressQuery,
  useSaveProfileMutation,
} from 'types/graphql'
import FormSkeleton from 'app/common/FormSkeleton'

const AddressForm = (): JSX.Element => {
  const { data, loading } = useAddressQuery()
  const mutationTuple = useSaveProfileMutation()

  if (loading || !data) return <FormSkeleton />

  return <div>Ready to mutate</div>
  {
    /*return (*/
  }
  {
    /*  <MutationContainer<*/
  }
  {
    /*  SaveProfileMutation,*/
  }
  {
    /*  SaveProfileMutationVariables,*/
  }
  {
    /*  DumbProps*/
  }
  {
    /*  >*/
  }
  {
    /*    mutationTuple={ mutationTuple }*/
  }
  {
    /*    Dumb={ Dumb }*/
  }
  {
    /*    data={ data }*/
  }
  {
    /*  />*/
  }
  {
    /*)*/
  }
}

export default AddressForm

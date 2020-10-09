import { useAuthQuery } from 'types/graphql'
import { useEffect } from 'react'

const useAuthOnlyQuery = function(query: VoidFunction): void {
  const { data: authData } = useAuthQuery()

  useEffect(() => {
    if (authData?.auth) {
      query()
    }
  }, [query, authData])
}

export default useAuthOnlyQuery

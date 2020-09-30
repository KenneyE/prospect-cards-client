import React from 'react'
import { ProductsQuery } from 'types/graphql'
import { Button } from '@material-ui/core'
import { centsToDollars } from 'lib'
import { Link } from 'react-router-dom'

interface Props {
  data: ProductsQuery;
}

const NewMembership = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.viewer.availableMemberships.map(
        (prod): JSX.Element => {
          return (
            <Button
              key={ prod.token }
              component={ Link }
              to={ `/account/add_payment/${prod.token}` }
            >
              {centsToDollars(prod.price)} per {prod.term}
            </Button>
          )
        },
      )}
    </>
  )
}

export default NewMembership

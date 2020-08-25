import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const PaymentAdded = (): JSX.Element => {
  return (
    <div>
      <Typography>
        All set! Click here to check out our newest listings!
      </Typography>
      <Button component={ Link } to='/'>
        View Listings
      </Button>
    </div>
  )
}

export default PaymentAdded

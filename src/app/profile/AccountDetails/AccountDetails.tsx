import React from 'react'
import useStyles from './styles'
import { TextField, Typography } from '@material-ui/core'
import ProfilePicture from 'app/profile/ProfilePicture'
import { ProfileQuery } from 'types/graphql'
import AddressForm from 'app/profile/AddressForm'

interface Props {
  data: ProfileQuery;
}

const AccountDetails = ({ data: { viewer } }: Props): JSX.Element => {
  const classes = useStyles()
  const { profilePictureUrl, email } = viewer

  return (
    <div className={ classes.root }>
      <Typography variant='h3' component='h1'>
        Account Details
      </Typography>
      <div className={ classes.profilePictureWrapper }>
        <ProfilePicture profilePictureUrl={ profilePictureUrl } />
      </div>
      <TextField
        disabled
        fullWidth
        label='Email'
        variant='outlined'
        value={ email }
      />
      <AddressForm />
    </div>
  )
}

export default AccountDetails

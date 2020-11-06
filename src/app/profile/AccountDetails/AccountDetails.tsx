import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core'
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
      <ProfilePicture profilePictureUrl={ profilePictureUrl } />
      <Typography>Email: {email}</Typography>
      <AddressForm />
    </div>
  )
}

export default AccountDetails

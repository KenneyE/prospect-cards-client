import React from 'react'
import { ProfileQuery } from 'types/graphql'
import ProfilePicture from 'app/profile/ProfilePicture'
import { Typography } from '@material-ui/core'

interface Props {
  data: ProfileQuery;
}

const Profile = ({
  data: {
    viewer: { profilePictureUrl, email },
  },
}: Props): JSX.Element => {
  return (
    <>
      <Typography>{email}</Typography>
      <ProfilePicture profilePictureUrl={ profilePictureUrl } />
    </>
  )
}

export default Profile

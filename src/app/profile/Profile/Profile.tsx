import React from 'react'
import { ProfileQuery } from 'types/graphql'
import ProfilePicture from 'app/profile/ProfilePicture'

interface Props {
  data: ProfileQuery;
}

const Profile = (props: Props): JSX.Element => {
  return (
    <ProfilePicture profilePictureUrl={ props.data.viewer.profilePictureUrl } />
  )
}

export default Profile

import React from 'react'
import Dumb from './ProfilePicture'
import { useSaveProfilePictureMutation } from 'types/graphql'

interface Props {
  profilePictureUrl: string;
}

const ProfilePicture = ({ profilePictureUrl }: Props): JSX.Element => {
  const [savePhoto, { loading }] = useSaveProfilePictureMutation()

  return (
    <Dumb
      savePhoto={ savePhoto }
      loading={ loading }
      profilePictureUrl={ profilePictureUrl }
    />
  )
}

export default ProfilePicture

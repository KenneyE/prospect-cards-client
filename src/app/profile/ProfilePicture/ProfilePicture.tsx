import React, { useCallback } from 'react'
import useStyles from './styles'
import { SaveProfilePictureMutationFn } from 'types/graphql'
import { useDropzone } from 'react-dropzone'
import Spinner from 'app/common/Spinner'

interface Props {
  savePhoto: SaveProfilePictureMutationFn;
  loading: boolean;
  profilePictureUrl: string;
}

const ProfilePicture = ({
  savePhoto,
  profilePictureUrl,
  loading,
}: Props): JSX.Element => {
  const classes = useStyles()

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        return
      }

      const img = acceptedFiles[0]

      savePhoto({
        variables: {
          picture: {
            document: img,
            preview: URL.createObjectURL(img),
          },
        },
      })
    },
    [savePhoto],
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div
      { ...getRootProps() }
      style={ {
        background: `url("${profilePictureUrl}") no-repeat center`,
      } }
      className={ classes.profileDropzone }
    >
      <input { ...getInputProps() } />
      {loading && (
        <div className={ classes.profileSpinner }>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default ProfilePicture

import gql from 'graphql-tag'

gql`
  mutation saveProfilePicture($picture: Upload!) {
    saveProfilePicture(picture: $picture) {
      viewer {
        id
        profilePictureUrl
      }
    }
  }
`

import gql from 'graphql-tag'

gql`
  mutation saveProfilePicture($picture: Upload!) {
    saveProfilePicture(picture: $picture) {
      viewer {
        id
        profilePictureUrl
      }
      message
    }
  }
`

gql`
  mutation saveEmailPreferences(
    $emailPreferences: [EmailPreferenceInput!]!
    $token: String
  ) {
    saveEmailPreferences(emailPreferences: $emailPreferences, token: $token) {
      viewer {
        id
        emailPreferences {
          ...emailPreference
        }
      }
      message
    }
  }
`

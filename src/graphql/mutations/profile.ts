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
  mutation saveEmailPreferences($emailPreferences: [EmailPreferenceInput!]!) {
    saveEmailPreferences(emailPreferences: $emailPreferences) {
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

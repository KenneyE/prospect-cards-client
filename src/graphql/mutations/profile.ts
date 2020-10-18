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

gql`
  mutation saveEmailPreferences($emailPreferences: [EmailPreferenceInput!]!) {
    saveEmailPreferences(emailPreferences: $emailPreferences) {
      viewer {
        id
        emailPreferences {
          ...emailPreference
        }
      }
    }
  }
`

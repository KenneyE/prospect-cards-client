import gql from 'graphql-tag'

gql`
  fragment player on Player {
    id
    name
  }
`

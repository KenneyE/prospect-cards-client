import { makeStyles, StyleRules } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    root: {
      width: '600px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    profilePictureWrapper: {
      marginTop: 80,
      marginBottom: 80,
    },
  }),
)

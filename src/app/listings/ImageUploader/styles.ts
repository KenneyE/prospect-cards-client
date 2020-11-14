import { makeStyles, Theme, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  (theme: Theme): StyleRules => ({
    dropzoneContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    dropzone: {
      border: 1,
      borderRadius: 3,
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      flexGrow: 1,
    },
    dropzoneContent: {
      height: '100%',
    },
    disabled: {
      color: 'gray',
    },
  }),
)

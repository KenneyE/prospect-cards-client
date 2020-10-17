import { makeStyles, Theme, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  (theme: Theme): StyleRules => ({
    formControl: {
      width: 300,
    },
    dropzone: {
      border: 1,
      borderRadius: 3,
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
    },
    disabled: {
      color: 'gray',
    },
  }),
)

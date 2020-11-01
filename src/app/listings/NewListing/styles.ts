import { makeStyles, Theme, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  (theme: Theme): StyleRules => ({
    root: {
      margin: '40px 60px',
    },
    formControl: {
      width: 300,
    },
    dropzone: {
      border: 1,
      borderRadius: 3,
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
      height: '100%',
    },
    dzInput: {
      height: '100%',
    },
    disabled: {
      color: 'gray',
    },
  }),
)

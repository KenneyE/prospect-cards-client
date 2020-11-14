import { makeStyles, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  (): StyleRules => ({
    root: {
      margin: '40px 60px',
    },
    formControl: {
      width: 300,
    },
    dropzoneContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
)

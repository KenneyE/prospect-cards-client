import { makeStyles, Theme, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  (theme: Theme): StyleRules => ({
    thumb: {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 100,
      height: 100,
      padding: 4,
      boxSizing: 'border-box',
    },
    thumbInner: {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden',
    },
    thumbImg: {
      display: 'block',
      width: 'auto',
      height: '100%',
    },
    dropzone: {
      border: 1,
      borderRadius: 3,
      marginTop: theme.spacing(),
    },
  }),
)

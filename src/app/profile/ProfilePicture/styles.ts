import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    profileDropzone: {
      position: 'relative',
      backgroundSize: 'cover',
      height: 300,
      width: 300,
      borderRadius: 5,
      '&:hover': {
        border: '1px solid gray',
        cursor: 'pointer',
      },
    },
    profileSpinner: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
)

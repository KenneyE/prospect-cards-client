import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    button: {
      marginTop: theme.spacing(),
    },
    card: {
      width: '400px',
      margin: 'auto',
    },
    media: {
      margin: 20,
      marginBottom: 0,
      height: 50,
    },
  }),
)

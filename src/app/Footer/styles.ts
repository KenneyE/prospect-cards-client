import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    root: {
      width: '100%',
      borderTop: '1px solid #aaa',
    },
  }),
)

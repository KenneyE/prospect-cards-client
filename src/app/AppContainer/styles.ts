import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  (theme: Theme): StyleRules => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      paddingTop: 10,
      flexGrow: 1,
      minHeight: '100vh',
      backgroundColor: '#f6f8fa',
      paddingBottom: 100,
    },
  }),
)

import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ palette }: Theme): StyleRules => ({
    root: {
      flexGrow: 1,
      backgroundColor: palette.background.paper,
      display: 'flex',
      height: 800,
    },
    tabs: {
      borderRight: `1px solid ${palette.divider}`,
    },
  }),
)

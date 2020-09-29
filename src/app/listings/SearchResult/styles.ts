import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultCard: {
      width: 250,
      marginLeft: spacing(),
      marginRight: spacing(),
      padding: spacing(),
      flexDirection: 'column',
      display: 'flex',
    },
    grow: { flexGrow: 1 },
  }),
)

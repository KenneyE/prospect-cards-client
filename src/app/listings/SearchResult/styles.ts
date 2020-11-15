import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultCard: {
      width: 250,
      margin: spacing(),
      padding: spacing(2),
      flexDirection: 'column',
      display: 'flex',
      borderRadius: 14,
    },
    date: {
      marginBottom: spacing(),
    },
    grow: { flexGrow: 1 },
    favoriteContainer: { float: 'right' },
  }),
)

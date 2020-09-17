import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultsWrapper: { display: 'flex', justifyContent: 'space-evenly' },
    resultCard: {
      width: 250,
      marginLeft: spacing(),
      marginRight: spacing(),
      padding: spacing(),
      flexDirection: 'column',
      display: 'flex',
    },
    img: { height: 170, width: 'auto !important' },
    grow: { flexGrow: 1 },
  }),
)

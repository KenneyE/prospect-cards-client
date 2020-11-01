import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultsWrapper: { display: 'flex', justifyContent: 'left' },
    searchBox: {
      borderRadius: 20,
      height: 40,
      marginBottom: spacing(),
    },
  }),
)

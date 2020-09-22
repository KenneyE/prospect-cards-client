import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    resultsWrapper: { display: 'flex', justifyContent: 'space-evenly' },
  }),
)

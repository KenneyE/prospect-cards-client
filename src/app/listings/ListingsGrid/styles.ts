import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    root: {
      maxWidth: 445,
    },
    offersTitle: {
      marginTop: spacing(),
    },
  }),
)

import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    card: {
      marginBottom: spacing(),
      display: 'flex',
    },
    details: {
      flexGrow: 2,
    },
    imageWrapper: {
      flexGrow: 1,
    },
    img: {
      height: 140,
      width: 'auto',
    },
  }),
)

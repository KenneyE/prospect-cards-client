import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    listing: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing(),
      marginBottom: spacing(2),
      '&:hover': {
        cursor: 'pointer',
      },
    },
    img: {
      height: 80,
    },
  }),
)

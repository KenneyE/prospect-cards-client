import { makeStyles, StyleRules, Theme } from '@material-ui/core/styles'

export default makeStyles(
  ({ spacing }: Theme): StyleRules => ({
    root: {
      margin: 'auto',
      maxWidth: 1100,
      padding: '64px 56px',
      position: 'relative',
    },
    favoriteContainer: {
      position: 'absolute',
      top: spacing(2),
      right: spacing(2),
    },
    divider: {
      marginTop: spacing(2),
      marginBottom: spacing(2),
    },
    detailsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    offerButtonsContainer: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sellerWrapper: {
      borderRadius: 14,
      border: '1px solid black',
      padding: '15px 25px 30px 25px',
    },
  }),
)

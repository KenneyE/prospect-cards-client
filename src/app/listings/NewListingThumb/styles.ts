import { makeStyles, Theme, StyleRules } from '@material-ui/core/styles'

// Style the child elements with active color
export default makeStyles(
  ({ spacing, palette }: Theme): StyleRules => ({
    thumb: {
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: spacing(2),
      marginRight: spacing(2),
      width: 100,
      height: 100,
      padding: spacing(),
      boxSizing: 'border-box',
    },
    primaryThumb: {
      borderColor: palette.primary.main,
      borderWidth: 3,
    },
    thumbInner: {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden',
    },
    thumbImg: {
      width: 'auto',
      height: '100%',
      margin: 'auto',
      maxHeight: 250,
    },
  }),
)

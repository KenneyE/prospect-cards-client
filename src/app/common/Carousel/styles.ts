import { makeStyles, StyleRules } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    root: {
      borderRadius: 14,
      overflow: 'hidden',
    },
    img: { height: 240, width: 'auto !important' },
  }),
)

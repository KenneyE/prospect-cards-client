import { makeStyles, StyleRules } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    linkArea: { textDecoration: 'none', color: 'inherit' },
    img: { height: 170, width: 'auto !important' },
  }),
)

import { makeStyles, StyleRules } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    sideCardToggle: {
      maxWidth: 180,
      textTransform: 'inherit',
    },
    title: {
      display: 'inline-block',
    },
    disableSwitch: {
      float: 'right',
    },
  }),
)

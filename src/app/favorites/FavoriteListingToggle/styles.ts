import { makeStyles, StyleRules } from '@material-ui/core/styles'

export default makeStyles(
  (): StyleRules => ({
    icon: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }),
)

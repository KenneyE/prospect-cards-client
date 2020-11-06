import { Button, withStyles } from '@material-ui/core'

const RoundButton = withStyles(() => ({
  root: {
    borderRadius: 100,
  },
}))(Button) as typeof Button

export default RoundButton

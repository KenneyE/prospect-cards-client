import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
// REVIEW: Needed?
// https://material-ui.com/components/about-the-lab/#typescript
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as type from '@material-ui/lab/themeAugmentation'
import { responsiveFontSizes } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '4rem',
    },
  },
})

export default responsiveFontSizes(theme)

import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  root: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  img: ({ height }: { height: number }) => ({
    height,
    width: 'auto !important',
  }),
})

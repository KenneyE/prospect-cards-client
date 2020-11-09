import React from 'react'
import {
  createStyles,
  makeStyles,
  Theme,
  StyleRules,
} from '@material-ui/core/styles'
import Button, { ButtonProps } from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(
  (theme: Theme): StyleRules =>
    createStyles({
      buttonProgress: {
        color: theme.palette.secondary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
    }),
)
export interface Props extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({
  loading,
  disabled,
  children,
  ...props
}: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <Button { ...props } disabled={ loading || disabled }>
      {children}
      {loading && (
        <CircularProgress size={ 24 } className={ classes.buttonProgress } />
      )}
    </Button>
  )
}

LoadingButton.displayName = 'LoadingButton'

export default LoadingButton

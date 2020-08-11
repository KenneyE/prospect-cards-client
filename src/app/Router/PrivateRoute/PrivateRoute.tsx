import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

export interface Props extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute = ({
  component,
  isAuthenticated,
  ...rest
}: Props): JSX.Element => {
  return (
    <Route
      { ...rest }
      render={ (props): JSX.Element =>
        isAuthenticated && component ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={ {
              pathname: '/login',
              state: { from: props.location },
            } }
          />
        )
      }
    />
  )
}

export default PrivateRoute

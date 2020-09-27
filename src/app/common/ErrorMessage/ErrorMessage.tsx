import React from 'react'

interface Props {
  message?: string;
}

const ErrorMessage = ({
  message = 'Woops! Something went wrong...',
}: Props): JSX.Element => {
  return <span>{message}</span>
}

export default ErrorMessage

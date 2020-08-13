import React from 'react'

interface Props {
  message?: string;
}

const ErrorMessage = ({ message}: Props): JSX.Element => {
  return <span>{ message } </span>
}

export default ErrorMessage

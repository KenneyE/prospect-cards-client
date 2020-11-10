import React from 'react'
import { useField } from 'formik'
import { TextField, TextFieldProps } from '@material-ui/core'

type Props = TextFieldProps & {
  name: string;
};

const FormTextField = (props: Props): JSX.Element => {
  const [field, meta] = useField(props.name)

  const hasError = Boolean(meta.touched && meta.error)

  return (
    <TextField
      variant='outlined'
      error={ hasError }
      helperText={ hasError && meta.error }
      { ...field }
      { ...props }
    />
  )
}

export default FormTextField

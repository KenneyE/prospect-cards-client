import React, { ChangeEvent, useState } from 'react'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import MaskedInput, { MaskedInputProps } from 'react-text-mask'
import { useField } from 'formik'
import { TextField } from '@material-ui/core'
import { TextFieldProps } from '@material-ui/core/TextField/TextField'

interface Props extends MaskedInputProps {
  name: string;
  value?: number;
  textFieldProps?: TextFieldProps;
}
const defaultMaskOptions = {
  prefix: '$ ',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 6, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const currencyMask = createNumberMask(defaultMaskOptions)

const DollarInput = ({
  name,
  value,
  placeholder = '$',
  textFieldProps = {},
  ...props
}: Props): JSX.Element => {
  // For some reason, just using `setFieldValue` strips decimals from the amount
  // Using state, and then using that to set the field value maintains the
  // decimal places.
  const [amount, setAmount] = useState(value)

  const [field, meta] = useField(name)
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const cleanValue = parseFloat(event.target.value.replace(/[$,]/g, ''))
    setAmount(isNaN(cleanValue) ? 0 : cleanValue)
  }

  const hasError = Boolean(meta.error && meta.touched)

  return (
    <MaskedInput
      { ...field }
      onChange={ handleChange }
      placeholder={ placeholder }
      mask={ currencyMask }
      value={ amount || '' }
      { ...props }
      render={ (
        inputRef: (inputElement: HTMLInputElement) => void,
        { color, size, ...props }: MaskedInputProps,
      ): JSX.Element => (
        <TextField
          id={ name }
          { ...props }
          { ...textFieldProps }
          fullWidth
          inputRef={ inputRef }
          variant='outlined'
          error={ hasError }
          helperText={ hasError && meta.error }
        />
      ) }
    />
  )
}

export default DollarInput

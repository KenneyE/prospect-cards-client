import React from 'react'
import NumberFormat, { NumberFormatProps } from 'react-number-format'

export interface Props extends Omit<NumberFormatProps, 'onChange'> {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (value: string) => void;
  name: string;
}

const MaskedNumber = (props: Props): JSX.Element => {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      { ...other }
      getInputRef={ inputRef }
      onValueChange={ (values) => {
        onChange(values.value)
      } }
    />
  )
}

export default MaskedNumber

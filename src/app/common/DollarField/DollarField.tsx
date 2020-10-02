import React from 'react'
import NumberFormat from 'react-number-format'

interface Props {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (value: string) => void;
  name: string;
}

const DollarField = (props: Props): JSX.Element => {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      { ...other }
      getInputRef={ inputRef }
      onValueChange={ (values) => {
        onChange(values.value)
      } }
      thousandSeparator
      isNumericString
      decimalScale={ 2 }
      allowNegative={ false }
      prefix='$'
    />
  )
}

export default DollarField

import React from 'react'
import NumberFormat from 'react-number-format'
import MaskedNumber from './MaskedNumber'

interface Props {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (value: string) => void;
  name: string;
}

const DollarField = (props: Props): JSX.Element => {
  return (
    <MaskedNumber
      thousandSeparator
      isNumericString
      decimalScale={ 2 }
      allowNegative={ false }
      prefix='$'
      { ...props }
    />
  )
}

export default DollarField

import React from 'react'
import useStyles from './styles'
import { SaveOfferMutationFn } from 'types/graphql'
import { Form, Formik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import NumberFormat from 'react-number-format'

interface Props {
  listingId: number;
  saveOffer: SaveOfferMutationFn;
}

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (value: string) => void;
  name: string;
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
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

const OfferForm = ({ listingId, saveOffer }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={ { offer: { listingId, price: 10 } } }
      onSubmit={ (variables) => {
        saveOffer({ variables })
      } }
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <TextField
              value={ values.offer.price }
              onChange={ (price) => setFieldValue('offer.price', price) }
              variant='outlined'
              InputProps={ {
                inputComponent: NumberFormatCustom as any,
                name: 'offer.price',
              } }
            />
            <Button type='submit'>Make Offer</Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default OfferForm

import React, { ComponentProps, useEffect, useState } from 'react'
import useStyles from './styles'
import { TextField, TextFieldProps } from '@material-ui/core'
import { MultiDataList } from '@appbaseio/reactivesearch'
import { validYears } from 'lib/time'

type Props = Omit<ComponentProps<typeof MultiDataList>, 'showCheckbox'>;
const YearSearch = ({ placeholder, ...props }: Props): JSX.Element => {
  const classes = useStyles()
  const [search, setSearch] = useState<string>('')
  const [values, setValues] = useState<string[]>([])
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    if (changed) {
      setChanged(false)
    }
  }, [changed, setChanged])

  const handleChange: TextFieldProps['onChange'] = ({ target: { value } }) => {
    setChanged(true)
    setSearch(value)
  }

  const years = validYears
    .filter((year) => year.toString().startsWith(search))
    .slice(0, 4)
    .map((year) => ({ label: year.toString(), value: year.toString() }))

  return (
    <div className={ classes.root }>
      <TextField
        value={ search }
        onChange={ handleChange }
        variant='outlined'
        placeholder={ placeholder }
      />
      {changed ? null : (
        <MultiDataList
          showCheckbox
          showCount={ false }
          showSearch={ false }
          URLParams
          value={ values }
          onChange={ (values) => {
            setValues(values)
          } }
          data={ years }
          { ...props }
        />
      )}
    </div>
  )
}

export default YearSearch

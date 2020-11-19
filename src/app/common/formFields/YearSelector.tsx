import React from 'react'
import { useField } from 'formik'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@material-ui/core'
import { validYears } from 'lib/time'

type Props = SelectProps & {
  name: string;
};

const YearSelector = (props: Props): JSX.Element => {
  const [field] = useField(props.name)

  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor='year-selector'>Year</InputLabel>
      <Select
        inputProps={ {
          id: 'year-selector',
        } }
        { ...field }
        { ...props }
      >
        {validYears.map((year) => (
          <MenuItem key={ year } value={ year }>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default YearSelector

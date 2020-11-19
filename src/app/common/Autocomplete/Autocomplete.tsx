import React from 'react'
import MuiAutocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import { useField } from 'formik'

interface Props {
  label: string;
  values?: { name: string; id: number }[];
  setOpen: (open: boolean) => void;
  open: boolean;
  loading: boolean;
  handleChange: (name: string) => void;
  handleFocus: VoidFunction;
  value: string;
  name: string;
  placeholder?: string;
}

const Autocomplete = ({
  label,
  values,
  setOpen,
  open,
  loading,
  handleChange,
  handleFocus,
  value,
  name,
  placeholder,
}: Props): JSX.Element => {
  const classes = useStyles()
  const [, meta] = useField(name)
  const options = values || []

  const hasError = Boolean(meta.error && meta.touched)

  return (
    <div className={ classes.root }>
      <MuiAutocomplete<{ name: string; id: number }, false, false, true>
        style={ { width: 300 } }
        open={ open }
        freeSolo
        onOpen={ () => {
          setOpen(true)
        } }
        onClose={ () => {
          setOpen(false)
        } }
        getOptionSelected={ (option, value) => option.name === value.name }
        getOptionLabel={ (option) => option.name }
        options={ options }
        loading={ loading }
        onInputChange={ (event, value) => handleChange(value) }
        renderInput={ (params) => (
          <TextField
            error={ hasError }
            helperText={ hasError && meta.error }
            value={ value }
            onChange={ (event) => handleChange(event.target.value) }
            onFocus={ handleFocus }
            { ...params }
            label={ label }
            variant='outlined'
            placeholder={ placeholder }
            InputProps={ {
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={ 20 } />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            } }
          />
        ) }
      />
    </div>
  )
}

export default Autocomplete

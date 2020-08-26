import React from 'react'
import { PlayerFragment, PlayersQuery } from 'types/graphql'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'

interface Props {
  data?: PlayersQuery;
  setOpen: (open: boolean) => void;
  open: boolean;
  loading: boolean;
  handleChange: (name: string) => void;
  value: string;
}

const PlayerInputField = ({
  data,
  setOpen,
  open,
  loading,
  handleChange,
  value,
}: Props): JSX.Element => {
  const options = data?.viewer.players || []

  return (
    <Autocomplete<PlayerFragment, false, false, true>
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
          value={ value }
          onChange={ (event) => handleChange(event.target.value) }
          { ...params }
          label='Player'
          variant='outlined'
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
  )
}

export default PlayerInputField

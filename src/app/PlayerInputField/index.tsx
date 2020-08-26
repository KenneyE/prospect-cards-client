import React, { useState } from 'react'
import Dumb from './PlayerInputField'
import { usePlayersQuery } from 'types/graphql'

export interface Props {
  onChange: (name: string) => void;
}

const PlayerInputField = ({ onChange }: Props): JSX.Element => {
  const { data, loading, refetch } = usePlayersQuery()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (name: string): void => {
    onChange(name)
    setValue(name)
    refetch({ name })
  }

  return (
    <Dumb
      data={ data }
      loading={ loading }
      open={ open }
      setOpen={ setOpen }
      handleChange={ handleChange }
      value={ value }
    />
  )
}

export default PlayerInputField

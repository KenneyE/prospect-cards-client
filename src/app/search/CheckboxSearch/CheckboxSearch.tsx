import React, { ComponentProps, useEffect, useState } from 'react'
import useStyles from './styles'
import { TagsQuery } from 'types/graphql'
import { MultiDataList } from '@appbaseio/reactivesearch'
import { LinearProgress, TextField, TextFieldProps } from '@material-ui/core'

interface Props
  extends Omit<ComponentProps<typeof MultiDataList>, 'showCheckbox'> {
  tagData?: TagsQuery;
  update: (name: string) => void;
  loading: boolean;
}

const CheckboxSearch = ({
  tagData,
  update,
  loading,
  placeholder,
  ...props
}: Props): JSX.Element => {
  const classes = useStyles()
  const [search, setSearch] = useState<string>('')
  const [values, setValues] = useState<string[]>([])
  const [wasLoading, setWasLoading] = useState(false)

  const tags = values.concat((tagData?.tags || []).map((tag) => tag.name))
  const uniqueTags = Array.from(new Set(tags))

  const data = uniqueTags.map((tag) => ({
    label: tag,
    value: tag,
  }))

  useEffect(() => {
    // Used to force MultiDataList to unmount and re-mount when moving from
    // loading to not loading. Required for MultiDataList to see changes
    // in data.
    if (loading !== wasLoading) {
      setWasLoading(loading)
    }
  }, [loading, wasLoading, setWasLoading])

  const handleChange: TextFieldProps['onChange'] = ({ target: { value } }) => {
    if (value !== search) {
      setSearch(value)
      update(value)
    }
  }

  return (
    <div className={ classes.root }>
      <TextField
        value={ search }
        onChange={ handleChange }
        variant='outlined'
        placeholder={ placeholder }
      />
      {loading && <LinearProgress />}
      {!loading && wasLoading ? null : (
        <MultiDataList
          showCheckbox
          showCount={ false }
          showSearch={ false }
          URLParams
          value={ values }
          onChange={ (values) => {
            setValues(values || [])
          } }
          data={ data || [] }
          { ...props }
        />
      )}
    </div>
  )
}

export default CheckboxSearch

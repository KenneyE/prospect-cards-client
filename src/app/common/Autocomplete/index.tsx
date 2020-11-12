import React, { useEffect, useState } from 'react'
import Dumb from './Autocomplete'
import { QueryTuple } from '@apollo/client/react/types/types'
import { Maybe } from 'types/graphql'

export interface Props<Result> {
  label: string;
  onChange: (name: string) => void;
  hookResult: Result;
  values?: { name: string; id: number }[];
  fetchImmediatly?: boolean;
  name: string;
}

const Autocomplete = function <
  Q,
  V extends { name?: Maybe<string> },
  Result extends QueryTuple<Q, V>
>({
  label,
  onChange,
  hookResult,
  values,
  fetchImmediatly,
  name,
}: Props<Result>): JSX.Element {
  const [fetch, { loading, refetch }] = hookResult

  useEffect(() => {
    if (fetchImmediatly && !refetch) {
      fetch()
    }
  })
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleChange = (name: string): void => {
    onChange(name)
    setValue(name)
    if (refetch) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      refetch({ name })
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fetch({ variables: { name } })
    }
  }

  return (
    <Dumb
      label={ label }
      values={ values }
      loading={ loading }
      open={ open }
      setOpen={ setOpen }
      handleChange={ handleChange }
      value={ value }
      name={ name }
    />
  )
}

export default Autocomplete

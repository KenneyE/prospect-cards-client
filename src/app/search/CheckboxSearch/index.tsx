import React, { ComponentProps } from 'react'
import Dumb from './CheckboxSearch'
import { TagTypesEnum, useTagsQuery } from 'types/graphql'
import MultiDataList from '@appbaseio/reactivesearch/lib/components/list/MultiDataList'

interface Props
  extends Omit<ComponentProps<typeof MultiDataList>, 'showCheckbox'> {
  tagType: TagTypesEnum;
}

const CheckboxSearch = ({ tagType, ...props }: Props): JSX.Element => {
  const { data, refetch, loading } = useTagsQuery({
    variables: { context: tagType },
    notifyOnNetworkStatusChange: true,
  })

  const update = (name: string) => {
    refetch({ name })
  }
  return <Dumb tagData={ data } loading={ loading } update={ update } { ...props } />
}

export default CheckboxSearch

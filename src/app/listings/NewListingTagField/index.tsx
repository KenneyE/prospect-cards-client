import React from 'react'
import {
  TagsLazyQueryHookResult,
  TagsQuery,
  TagsQueryVariables,
  TagTypesEnum,
  useTagsLazyQuery,
} from 'types/graphql'
import Autocomplete from 'app/common/Autocomplete'
import { useField } from 'formik'

interface Props {
  context: TagTypesEnum;
  label: string;
  name: string;
  placeholder: string;
}

const NewListingTagField = ({
  placeholder,
  context,
  label,
  name,
}: Props): JSX.Element => {
  const [field, , helpers] = useField(name)
  const hookResult = useTagsLazyQuery({
    variables: {
      context,
    },
  })

  return (
    <Autocomplete<TagsQuery, TagsQueryVariables, TagsLazyQueryHookResult>
      { ...field }
      label={ label }
      onChange={ (val: string) => helpers.setValue(val) }
      hookResult={ hookResult }
      placeholder={ placeholder }
      name={ name }
      values={ hookResult[1].data?.tags }
      fetchImmediately
    />
  )
}

export default NewListingTagField

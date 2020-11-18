import React from 'react'
import { Card, CardContent, Grid } from '@material-ui/core'
import { Form, Formik } from 'formik'
import {
  ListingInput,
  SaveListingMutationFn,
  TagsLazyQueryHookResult,
  TagsQuery,
  TagsQueryVariables,
  TagTypesEnum,
  useTagsLazyQuery,
} from 'types/graphql'
import useStyles from './styles'
import * as Yup from 'yup'
import arrayMove from 'array-move'
import LoadingButton from 'app/common/LoadingButton'
import * as Sortable from 'react-sortable-hoc'
import { checkFileSize } from 'lib'
import { NotRequiredArraySchema } from 'yup'
import FormTextField from 'app/common/formFields/FormTextField'
import Autocomplete from 'app/common/Autocomplete'
import ConfirmEmailDialog from 'app/ConfirmEmailDialog'
import DollarInput from 'app/common/formFields/DollarInput'
import ImageUploader from 'app/listings/ImageUploader'
import { DateTime } from 'luxon'
import YearSelector from 'app/common/formFields/YearSelector'

const imagesSchema: NotRequiredArraySchema<{ document: File }> = Yup.array<{
  document: File;
}>()
  .min(1, 'Must include at least 1 image.')
  .max(8, 'Maximum of 8 images')
  .test('is-big-file', 'VALIDATION_FIELD_FILE_SIZE', checkFileSize)

const listingInputSchema = Yup.object()
  .shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string().min(10, 'Too Short!').required('Required'),
    images: imagesSchema,
    category: Yup.string().required('Required'),
    productType: Yup.string().required('Required'),
    manufacturer: Yup.string().required('Required'),
    setType: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
  })
  .defined()

const ListingSchema = Yup.object()
  .shape({
    listing: listingInputSchema,
  })
  .defined()

interface Props {
  loading: boolean;
  saveListing: SaveListingMutationFn;
}

const NewListing = ({ saveListing, loading }: Props): JSX.Element => {
  const classes = useStyles()
  const playersHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.Player,
    },
  })
  const categoriesHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.Category,
    },
  })
  const productTypesHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.ProductType,
    },
  })

  const manufacturersHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.Manufacturer,
    },
  })
  const setTypesHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.SetType,
    },
  })
  const gradersHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.Grader,
    },
  })
  const parallelsHookResult = useTagsLazyQuery({
    variables: {
      context: TagTypesEnum.Parallel,
    },
  })

  const initialValues: {
    listing: ListingInput;
  } = {
    listing: {
      title: '',
      description: '',
      price: 10,
      year: DateTime.local().year,
      images: [],
      category: '',
      productType: '',
      manufacturer: '',
      setType: '',
      parallel: '',
      grader: '',
      player: '',
    },
  }

  return (
    <>
      <Card className={ classes.root }>
        <CardContent>
          <Formik
            validationSchema={ ListingSchema }
            initialValues={ initialValues }
            onSubmit={ (variables, { setSubmitting, resetForm }): void => {
              saveListing({ variables }).then((): void => {
                setSubmitting(false)
                resetForm()
              })
            } }
          >
            {({ values, setFieldValue }): JSX.Element => {
              const onSortEnd: Sortable.SortEndHandler = ({
                oldIndex,
                newIndex,
              }) => {
                setFieldValue(
                  'listing.images',
                  arrayMove(values.listing.images, oldIndex, newIndex),
                )
              }

              return (
                <Form>
                  <Grid container spacing={ 3 }>
                    <Grid
                      item
                      md={ 4 }
                      xs={ 12 }
                      className={ classes.dropzoneContainer }
                    >
                      <ImageUploader
                        onSortEnd={ onSortEnd }
                        axis='xy'
                        images={ values.listing.images }
                        distance={ 5 }
                      />
                    </Grid>
                    <Grid item md={ 8 } xs={ 12 }>
                      <FormTextField
                        margin='normal'
                        name='listing.title'
                        label='Title'
                        variant='standard'
                      />
                      <FormTextField
                        margin='normal'
                        name='listing.description'
                        label='Description'
                        variant='standard'
                        fullWidth
                        multiline
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Player'
                        onChange={ (name: string) =>
                          setFieldValue('listing.player', name)
                        }
                        hookResult={ playersHookResult }
                        placeholder='LeBron James, Mike Trout, ...'
                        name='listing.player'
                        values={ playersHookResult[1].data?.tags }
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Sport'
                        onChange={ (name: string) =>
                          setFieldValue('listing.category', name)
                        }
                        hookResult={ categoriesHookResult }
                        placeholder='Basketball, Baseball, Soccer, ...'
                        name='listing.category'
                        values={ categoriesHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <YearSelector name='listing.year' />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Card Type'
                        onChange={ (name: string) =>
                          setFieldValue('listing.productType', name)
                        }
                        hookResult={ productTypesHookResult }
                        placeholder='Base, Insert, Patch Autograph, ...'
                        name='listing.productType'
                        values={ productTypesHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Manufacturer'
                        onChange={ (name: string) =>
                          setFieldValue('listing.manufacturer', name)
                        }
                        hookResult={ manufacturersHookResult }
                        placeholder='Panini, Upper Deck, ...'
                        name='listing.manufacturer'
                        values={ manufacturersHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Set Type'
                        onChange={ (name: string) =>
                          setFieldValue('listing.setType', name)
                        }
                        hookResult={ setTypesHookResult }
                        placeholder='Prizm, Chrome, Optic, ...'
                        name='listing.setType'
                        values={ setTypesHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Parallel'
                        onChange={ (name: string) =>
                          setFieldValue('listing.parallel', name)
                        }
                        hookResult={ parallelsHookResult }
                        placeholder='Prizm, Chrome, Optic, ...'
                        name='listing.parallel'
                        values={ parallelsHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <Autocomplete<
                      TagsQuery,
                      TagsQueryVariables,
                      TagsLazyQueryHookResult
                      >
                        label='Grader and Grade'
                        onChange={ (name: string) =>
                          setFieldValue('listing.grader', name)
                        }
                        hookResult={ gradersHookResult }
                        placeholder='PSA 10, CGC 9.5, (leave blank if none), ...'
                        name='listing.grader'
                        values={ gradersHookResult[1].data?.tags }
                        fetchImmediately
                      />

                      <DollarInput
                        name='listing.price'
                        value={ values.listing.price }
                        textFieldProps={ { label: 'Buy Now Price' } }
                      />

                      <br />
                      <LoadingButton
                        loading={ loading }
                        type='submit'
                        color='secondary'
                        variant='contained'
                      >
                        Save
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Form>
              )
            }}
          </Formik>
        </CardContent>
      </Card>
      <ConfirmEmailDialog />
    </>
  )
}

export default NewListing

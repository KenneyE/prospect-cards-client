import React from 'react'
import Dropzone from 'react-dropzone'
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import {
  ListingInput,
  SaveListingMutationFn,
  Scalars,
  TagsLazyQueryHookResult,
  TagsQuery,
  TagsQueryVariables,
  TagTypesEnum,
  useTagsLazyQuery,
} from 'types/graphql'
import useStyles from './styles'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import arrayMove from 'array-move'
import LoadingButton from 'app/common/LoadingButton'
import DollarField from 'app/common/formFields/DollarField'
import NewListingThumbs from 'app/listings/NewListingThumbs'
import * as Sortable from 'react-sortable-hoc'
import { checkFileSize } from 'lib'
import { NotRequiredArraySchema } from 'yup'
import FormTextField from 'app/common/formFields/FormTextField'
import Autocomplete from 'app/common/Autocomplete'

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
  const initialValues: {
    listing: ListingInput;
  } = {
    listing: {
      title: '',
      description: '',
      price: 10,
      images: [],
      category: '',
      productType: '',
      manufacturer: '',
      setType: '',
      grader: '',
      player: '',
    },
  }

  return (
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
          {({ values, setFieldValue, errors, touched }): JSX.Element => {
            const dropzoneDisabled = values.listing.images.length >= 8

            const handleDelete = (
              documentName: string,
            ): (() => void) => (): void => {
              const newAtts = values.listing.images.filter(
                (img): boolean => img.document.name !== documentName,
              )
              setFieldValue('listing.images', newAtts)
            }

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
                    <Dropzone
                      maxSize={ 5000000 }
                      disabled={ dropzoneDisabled }
                      accept='image/*'
                      onDrop={ (images): void => {
                        if (images.length === 0) {
                          return
                        }

                        if (images.length + values.listing.images.length > 8) {
                          toast.error('Sorry. Maximum of 8 images...')
                          return
                        }

                        setFieldValue(
                          'listing.images',
                          values.listing.images.concat(
                            images.map((img): Scalars['Upload'] => ({
                              document: img,
                              preview: URL.createObjectURL(img),
                            })),
                          ),
                        )
                      } }
                    >
                      {({
                        getRootProps,
                        getInputProps,
                        isDragActive,
                      }): JSX.Element => (
                        <Card className={ classes.dropzone }>
                          <CardContent
                            { ...getRootProps() }
                            className={ classes.dropzoneContent }
                          >
                            <input { ...getInputProps() } />
                            {dropzoneDisabled ? (
                              <Typography
                                variant='body2'
                                className={ classes.disabled }
                              >
                                Maximum number of images reached...
                              </Typography>
                            ) : isDragActive ? (
                              <Typography variant='body2'>
                                Drop your images here!
                              </Typography>
                            ) : (
                              <Typography variant='body2'>
                                Drag and drop a document here, or click to
                                select files.
                              </Typography>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </Dropzone>
                    <NewListingThumbs
                      images={ values.listing.images }
                      handleDelete={ handleDelete }
                      onSortEnd={ onSortEnd }
                      axis='x'
                      lockAxis='x'
                    />
                    {errors.listing?.images && touched.listing?.images ? (
                      <div>{errors.listing.images}</div>
                    ) : null}
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
                      name='listing.category'
                      values={ categoriesHookResult[1].data?.tags }
                      fetchImmediately
                    />

                    <Autocomplete<
                    TagsQuery,
                    TagsQueryVariables,
                    TagsLazyQueryHookResult
                    >
                      label='Product Type'
                      onChange={ (name: string) =>
                        setFieldValue('listing.productType', name)
                      }
                      hookResult={ productTypesHookResult }
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
                      name='listing.setType'
                      values={ setTypesHookResult[1].data?.tags }
                      fetchImmediately
                    />

                    <Autocomplete<
                    TagsQuery,
                    TagsQueryVariables,
                    TagsLazyQueryHookResult
                    >
                      label='Grader'
                      onChange={ (name: string) =>
                        setFieldValue('listing.grader', name)
                      }
                      hookResult={ gradersHookResult }
                      name='listing.grader'
                      values={ gradersHookResult[1].data?.tags }
                      fetchImmediately
                    />

                    <TextField
                      value={ values.listing.price }
                      onChange={ (price) =>
                        setFieldValue('listing.price', +price)
                      }
                      variant='outlined'
                      InputProps={ {
                        inputComponent: DollarField as any,
                        name: 'listing.price',
                      } }
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
  )
}

export default NewListing

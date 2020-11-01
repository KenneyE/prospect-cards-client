import React from 'react'
import Dropzone from 'react-dropzone'
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import {
  ListingInput,
  NewListingFieldsQuery,
  PlayerInput,
  SaveListingMutationFn,
  Scalars,
} from 'types/graphql'
import useStyles from './styles'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import arrayMove from 'array-move'
import PlayerInputField from 'app/PlayerInputField'
import LoadingButton from 'app/common/LoadingButton'
import DollarField from 'app/common/DollarField'
import NewListingThumbs from 'app/listings/NewListingThumbs'
import * as Sortable from 'react-sortable-hoc'

const ListingSchema = Yup.object().shape({
  listing: Yup.object().shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string().min(10, 'Too Short!').required('Required'),
    images: Yup.array()
      .min(1, 'Must include at least 1 image.')
      .max(8, 'Maximum of 8 images'),
    categoryId: Yup.number().required('Required'),
    productTypeId: Yup.number().required('Required'),
  }),
  player: Yup.object().shape({ name: Yup.string().required('Required') }),
})

interface Props {
  loading: boolean;
  saveListing: SaveListingMutationFn;
  data: NewListingFieldsQuery;
}

const NewListing = ({ saveListing, loading, data }: Props): JSX.Element => {
  const classes = useStyles()

  const initialValues: {
    listing: ListingInput;
    player: PlayerInput;
  } = {
    listing: {
      title: '',
      description: '',
      price: 10,
      images: [],
      categoryId: data.categories[0].id,
      productTypeId: data.productTypes[0].id,
      manufacturerId: data.manufacturers[0].id,
      setTypeId: data.setTypes[0].id,
      graderId: data.graders[0].id,
    },
    player: {
      name: '',
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
          {({
            values,
            handleChange,
            setFieldValue,
            errors,
            touched,
          }): JSX.Element => {
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
                  <Grid item xs={ 4 }>
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
                          <CardContent { ...getRootProps() }>
                            <input
                              { ...getInputProps() }
                              className={ classes.dzInput }
                            />
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
                  <Grid item xs={ 8 }>
                    <TextField
                      margin='normal'
                      id='listing.title'
                      value={ values.listing.title }
                      label='Title'
                      onChange={ handleChange }
                    />
                    {errors.listing?.title && touched.listing?.title ? (
                      <div>{errors.listing.title}</div>
                    ) : null}

                    <TextField
                      margin='normal'
                      id='listing.description'
                      multiline
                      value={ values.listing.description }
                      label='Description'
                      fullWidth
                      onChange={ handleChange }
                    />
                    {errors.listing?.description &&
                    touched.listing?.description ? (
                        <div>{errors.listing.description}</div>
                      ) : null}
                    <PlayerInputField
                      onChange={ (name: string) =>
                        setFieldValue('player.name', name)
                      }
                    />
                    {errors.player?.name && touched.player?.name ? (
                      <div>{errors.player.name}</div>
                    ) : null}

                    <Select
                      style={ { width: 300 } }
                      name='listing.categoryId'
                      value={ values.listing.categoryId }
                      onChange={ handleChange }
                      variant='outlined'
                    >
                      {(data?.categories || []).map((cat) => (
                        <MenuItem key={ cat.id } value={ cat.id }>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <Select
                      style={ { width: 300 } }
                      name='listing.productTypeId'
                      value={ values.listing.productTypeId }
                      onChange={ handleChange }
                      variant='outlined'
                    >
                      {(data?.productTypes || []).map((type) => (
                        <MenuItem key={ type.id } value={ type.id }>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>

                    <Select
                      style={ { width: 300 } }
                      name='listing.manufacturerId'
                      value={ values.listing.manufacturerId }
                      onChange={ handleChange }
                      variant='outlined'
                    >
                      {(data?.manufacturers || []).map((type) => (
                        <MenuItem key={ type.id } value={ type.id }>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>

                    <Select
                      style={ { width: 300 } }
                      name='listing.setTypeId'
                      value={ values.listing.setTypeId }
                      onChange={ handleChange }
                      variant='outlined'
                    >
                      {(data?.setTypes || []).map((type) => (
                        <MenuItem key={ type.id } value={ type.id }>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>

                    <Select
                      style={ { width: 300 } }
                      name='listing.graderId'
                      value={ values.listing.graderId }
                      onChange={ handleChange }
                      variant='outlined'
                    >
                      {(data?.graders || []).map((type) => (
                        <MenuItem key={ type.id } value={ type.id }>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>

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

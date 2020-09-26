import React from 'react'
import Dropzone from 'react-dropzone'
import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { Form, Formik } from 'formik'
import {
  ListingInput,
  NewListingFieldsQuery,
  PlayerInput,
  SaveListingMutationFn,
  Scalars,
} from 'types/graphql'
import useStyles from './styles'
import LoadingButton from 'app/common/LoadingButton'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import PlayerInputField from 'app/PlayerInputField'

const ListingSchema = Yup.object().shape({
  listing: Yup.object().shape({
    title: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string().min(25, 'Too Short!').required('Required'),
    images: Yup.array().min(1, 'Must include at least 1 image.'),
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
    <Grid>
      <Button variant='outlined' component={ Link } to='/'>
        Home
      </Button>
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
          const handleDelete = (
            documentName: string,
          ): (() => void) => (): void => {
            const newAtts = values.listing.images.filter(
              (img): boolean => img.document.name !== documentName,
            )
            setFieldValue('listing.images', newAtts)
          }

          const thumbs = values.listing.images.map(
            ({ document, preview }: Scalars['Upload']) => {
              return (
                <div className={ classes.thumb } key={ document.name }>
                  <div className={ classes.thumbInner }>
                    <CloseIcon onClick={ handleDelete(document.name) } />
                    <img
                      alt={ document.name }
                      src={ preview }
                      className={ classes.thumbImg }
                    />
                  </div>
                </div>
              )
            },
          )

          return (
            <Form>
              <TextField
                margin='normal'
                id='listing.title'
                value={ values.listing.title }
                label='Title'
                variant='outlined'
                fullWidth
                onChange={ handleChange }
              />
              {errors.listing?.title && touched.listing?.title ? (
                <div>{errors.listing.title}</div>
              ) : null}

              <TextField
                margin='normal'
                id='listing.description'
                multiline
                rows={ 10 }
                value={ values.listing.description }
                label='Description'
                variant='outlined'
                fullWidth
                onChange={ handleChange }
              />
              {errors.listing?.description && touched.listing?.description ? (
                <div>{errors.listing.description}</div>
              ) : null}
              <PlayerInputField
                onChange={ (name: string) => setFieldValue('player.name', name) }
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
              <Dropzone
                onDrop={ (images): void => {
                  if (images.length === 0) {
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
                      <input { ...getInputProps() } />
                      {isDragActive ? (
                        <Typography variant='body2' color='primary'>
                          Drop your document here!
                        </Typography>
                      ) : (
                        <Typography variant='body2'>
                          Drag and drop a document here, or click to select
                          files.
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                )}
              </Dropzone>
              {thumbs}
              {errors.listing?.images && touched.listing?.images ? (
                <div>{errors.listing.images}</div>
              ) : null}
              <LoadingButton
                loading={ loading }
                type='submit'
                color='secondary'
                variant='contained'
              >
                Save
              </LoadingButton>
            </Form>
          )
        }}
      </Formik>
    </Grid>
  )
}

export default NewListing

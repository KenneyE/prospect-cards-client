import React from 'react'
import Dropzone from 'react-dropzone'
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import { ListingInput, SaveListingMutationFn, Scalars } from 'types/graphql'
import useStyles from './styles'
import LoadingButton from 'app/common/LoadingButton'
import { Link } from 'react-router-dom'

interface Props {
  loading: boolean;
  saveListing: SaveListingMutationFn;
}

const NewListing = ({ saveListing, loading }: Props): JSX.Element => {
  const classes = useStyles()

  const initialValues: {
    listing: ListingInput;
  } = {
    listing: {
      title: '',
      description: '',
      images: [],
    },
  }

  return (
    <Grid>
      <Button variant='outlined' component={ Link } to='/'>
        Home
      </Button>
      <Formik
        initialValues={ initialValues }
        onSubmit={ (variables, { setSubmitting, resetForm }): void => {
          saveListing({ variables }).then((): void => {
            setSubmitting(false)
            resetForm()
          })
        } }
      >
        {({ values, handleChange, setFieldValue }): JSX.Element => {
          // const handleDelete = (
          //   documentName: string,
          // ): (() => void) => (): void => {
          //   const newAtts = values.listing.images.filter(
          //     (img): boolean => img.document.name !== documentName,
          //   )
          //   setFieldValue('listing.attachments', newAtts)
          // }

          const thumbs = values.listing.images.map(
            ({ document, preview }: Scalars['Upload']) => {
              return (
                <div className={ classes.thumb } key={ document.name }>
                  <div className={ classes.thumbInner }>
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
                  <Card>
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

import React from 'react'
import { ReportListingMutationFn } from 'types/graphql'
import Dialog from 'app/common/Dialog'
import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  report: ReportListingMutationFn;
  loading: boolean;
  listingId: number;
}

const initialValues = {
  text: '',
}

const ReportListingButton = ({
  open,
  setOpen,
  report,
  loading,
  listingId,
}: Props): JSX.Element => {
  return (
    <>
      <Button onClick={ () => setOpen(true) }>Report</Button>
      <Formik
        initialValues={ initialValues }
        onSubmit={ async({ text }) => {
          await report({ variables: { listingId, text } })
          setOpen(false)
        } }
      >
        {({ handleSubmit, handleChange, values }) => (
          <Dialog
            open={ open }
            loading={ loading }
            proceed={ (resp) => {
              if (resp) {
                handleSubmit()
              } else {
                setOpen(false)
              }
            } }
            header='Please provide details below.'
            confirmText='Submit'
          >
            <Form>
              <TextField
                rows={ 4 }
                variant='outlined'
                fullWidth
                multiline
                value={ values.text }
                name='text'
                onChange={ handleChange }
              />
            </Form>
          </Dialog>
        )}
      </Formik>
    </>
  )
}

export default ReportListingButton

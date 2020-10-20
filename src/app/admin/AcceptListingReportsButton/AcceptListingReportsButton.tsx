import React, { useState } from 'react'
import {
  AcceptListingReportsMutationFn,
  ListingReportsQuery,
} from 'types/graphql'
import Dialog from 'app/common/Dialog'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'

interface Props {
  data: ListingReportsQuery;
  accept: AcceptListingReportsMutationFn;
}

const AcceptListingReportsButton = ({ data, accept }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleProceed = (resp?: boolean) => {
    resp && accept()
    setOpen(false)
  }
  return (
    <>
      <Button onClick={ () => setOpen(true) }>Review</Button>
      <Dialog
        open={ open }
        header='Review Listing'
        confirmText='Accept and Re-enable'
        proceed={ handleProceed }
      >
        <Table aria-label='Reports table'>
          <TableHead>
            <TableRow>
              <TableCell>Report Text</TableCell>
              <TableCell align='right'>Reported At</TableCell>
              <TableCell align='right'>Reviewed At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.listing.reports.map((report) => (
              <TableRow key={ report.id }>
                <TableCell component='th' scope='report'>
                  {report.text}
                </TableCell>
                <TableCell align='right'>{report.createdAt}</TableCell>
                <TableCell align='right'>{report.reviewedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Dialog>
    </>
  )
}

export default AcceptListingReportsButton

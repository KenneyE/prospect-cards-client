import React from 'react'
import useStyles from './styles'
import {
  createStyles,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core'
import FooterList from 'app/footer/FooterList'
import { Facebook } from '@material-ui/icons'

const Footer = (): JSX.Element => {
  const classes = useStyles()

  const StyledTableCell = withStyles(() =>
    createStyles({
      root: {
        borderBottom: 'none',
        verticalAlign: 'top',
      },
    }),
  )(TableCell)

  return (
    <Grid container className={ classes.root }>
      <Grid item sm={ 2 } xs={ 12 }>
        <div className={ classes.logo }>Logo</div>
      </Grid>
      <Grid item sm={ 10 } xs={ 12 }>
        <Table className={ classes.table } size='small' aria-label='Footer table'>
          <TableHead>
            <TableRow>
              <TableCell>CONTACT</TableCell>
              <TableCell>NAVIGATION</TableCell>
              <TableCell>HELP</TableCell>
              <TableCell>SOCIAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell component='th' scope='row'>
                <FooterList
                  items={ [
                    { label: 'About Us', path: '/' },
                    { label: 'Contact Us', path: '/' },
                    { label: 'Address', path: '/' },
                    { label: 'Phone Number', path: '/' },
                  ] }
                />
              </StyledTableCell>
              <StyledTableCell>
                <FooterList
                  items={ [
                    { label: 'Sell Now', path: '/listings/new' },
                    { label: 'View Listings', path: '/' },
                    { label: 'My Offers', path: '/listings' },
                    { label: 'Account', path: '/profile' },
                  ] }
                />
              </StyledTableCell>
              <StyledTableCell>
                <FooterList
                  items={ [
                    { label: 'Buying/Selling Guidelines', path: '/' },
                    { label: 'Terms and Conditions', path: '/' },
                    { label: 'FAQs', path: '/faq' },
                  ] }
                />
              </StyledTableCell>
              <StyledTableCell>
                <Facebook />
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  )
}

export default Footer

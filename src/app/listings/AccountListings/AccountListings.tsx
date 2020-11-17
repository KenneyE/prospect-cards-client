import React, { ChangeEvent, useState } from 'react'
import { UserListingsQuery } from 'types/graphql'
import { Typography, withStyles, createStyles } from '@material-ui/core'
import ListingsGrid from 'app/listings/ListingsGrid'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import MyListings from 'app/listings/MyListings'
import PurchaseHistory from 'app/PurchaseHistory'

interface Props {
  data: UserListingsQuery;
}

const AccountListings = ({
  data: {
    viewer: { availableListings, soldListings },
  },
}: Props): JSX.Element => {
  const [value, setValue] = useState(0)

  const handleChange = (event: ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue)
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props

    return (
      <div
        role='tabpanel'
        hidden={ value !== index }
        id={ `listings-tabpanel-${index}` }
        aria-labelledby={ `listings-tab-${index}` }
        { ...other }
      >
        {value === index && children}
      </div>
    )
  }

  const StyledToggleButtonGroup = withStyles(() =>
    createStyles({
      root: {
        display: 'flex',
        maxWidth: 800,
        marginTop: 34,
        marginBottom: 60,
      },
    }),
  )(ToggleButtonGroup)

  const StyledToggleButton = withStyles(() =>
    createStyles({
      root: {
        flex: 1,
      },
    }),
  )(ToggleButton)

  return (
    <>
      <Typography>Current Offers</Typography>
      <StyledToggleButtonGroup
        value={ value }
        exclusive
        onChange={ handleChange }
        aria-label='Listings Tabs'
        size='small'
      >
        <StyledToggleButton value={ 0 } aria-label='left aligned'>
          My Listings
        </StyledToggleButton>
        <StyledToggleButton value={ 1 } aria-label='centered'>
          My Bids
        </StyledToggleButton>
        <StyledToggleButton value={ 2 } aria-label='centered'>
          Purchase History
        </StyledToggleButton>
        <StyledToggleButton value={ 3 } aria-label='centered'>
          Sale History
        </StyledToggleButton>
      </StyledToggleButtonGroup>
      <TabPanel value={ value } index={ 0 }>
        {availableListings.length ? (
          <MyListings listings={ availableListings } />
        ) : (
          <Typography>You have no active listings</Typography>
        )}
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        {soldListings.length ? (
          <ListingsGrid listings={ soldListings } />
        ) : (
          <Typography>You have no sold listings</Typography>
        )}
      </TabPanel>
      <TabPanel value={ value } index={ 2 }>
        <PurchaseHistory />
      </TabPanel>
    </>
  )
}

export default AccountListings

import React, { ChangeEvent, useState } from 'react'
import { Typography, withStyles, createStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { FavoritesQuery } from 'types/graphql'
import FavoriteListings from 'app/favorites/FavoriteListings'

interface Props {
  data: FavoritesQuery;
}

const Favorites = ({ data }: Props): JSX.Element => {
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
      <Typography>Favorites</Typography>
      <StyledToggleButtonGroup
        value={ value }
        exclusive
        onChange={ handleChange }
        aria-label='Listings Tabs'
        size='small'
      >
        <StyledToggleButton value={ 0 } aria-label='left aligned'>
          Listings
        </StyledToggleButton>
        <StyledToggleButton value={ 1 } aria-label='centered'>
          Sellers
        </StyledToggleButton>
      </StyledToggleButtonGroup>
      <TabPanel value={ value } index={ 0 }>
        <FavoriteListings listings={ data.viewer.favoriteListings } />
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        Fave sellers here
      </TabPanel>
    </>
  )
}

export default Favorites

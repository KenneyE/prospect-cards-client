import React, { useState } from 'react'
import useStyles from './styles'
import { ListingFragment } from 'types/graphql'
import {
  Card,
  CardContent,
  createStyles,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  withStyles,
} from '@material-ui/core'
import { ToggleButton } from '@material-ui/lab'
import Carousel from 'app/common/Carousel'

interface Props {
  listings: ListingFragment[];
}

const MyListings = ({ listings }: Props): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (value: number) => () => {
    setValue(value)
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

  const StyledToggleButton = withStyles(() =>
    createStyles({
      root: {
        marginTop: 10,
      },
    }),
  )(ToggleButton)

  return (
    <Card>
      <CardContent>
        <Grid container spacing={ 3 }>
          <Grid item>
            <Typography>Card</Typography>
            <Grid container direction='column'>
              {listings.map((listing, index) => (
                <StyledToggleButton
                  key={ listing.id }
                  value={ index }
                  aria-label='list'
                  selected={ value === index }
                  onClick={ handleChange(index) }
                  className={ classes.sideCardToggle }
                >
                  <Typography noWrap>{listing.title}</Typography>
                </StyledToggleButton>
              ))}
            </Grid>
          </Grid>
          <Grid item xs>
            {listings.map((listing, index) => (
              <TabPanel key={ listing.id } value={ value } index={ index }>
                <Typography className={ classes.title }>Details</Typography>
                <FormControlLabel
                  labelPlacement='start'
                  className={ classes.disableSwitch }
                  control={
                    <Switch
                      size='small'
                      checked={ false }
                      // onChange={ toggleChecked }
                    />
                  }
                  label='Temporarily Disable'
                />
                <Grid container spacing={ 1 }>
                  <Grid item md={ 3 } xs={ 12 }>
                    <Carousel listing={ listing } height={ 240 } />
                    <Typography>{listing.player.name}</Typography>
                    <Typography>{listing.description}</Typography>
                  </Grid>
                  <Grid item md={ 3 } xs={ 12 }>
                    Stuff here too
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MyListings

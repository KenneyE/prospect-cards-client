import React, { ChangeEvent, useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import useStyles from './styles'
import EmailPreferences from 'app/profile/EmailPreferences'
import AccountDetails from '../AccountDetails'

const Profile = (): JSX.Element => {
  const classes = useStyles()
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
        id={ `profile-tabpanel-${index}` }
        aria-labelledby={ `profile-tab-${index}` }
        className={ classes.panel }
        { ...other }
      >
        {value === index && children}
      </div>
    )
  }

  return (
    <div className={ classes.root }>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={ value }
        onChange={ handleChange }
        aria-label='Profile tabs'
        className={ classes.tabs }
      >
        <Tab label='Account Details' />
        <Tab label='Email Preferences' />
      </Tabs>

      <TabPanel value={ value } index={ 0 }>
        <AccountDetails />
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        <EmailPreferences />
      </TabPanel>
    </div>
  )
}

export default Profile

import React, { ChangeEvent, useState } from 'react'
import { Tabs, Tab } from '@material-ui/core'
import useStyles from './styles'
import EmailPreferences from 'app/profile/EmailPreferences'
import AccountDetails from 'app/profile/AccountDetails'
import AddPayment from 'app/account/AddPayment'
import { useParams } from 'react-router'

type TabName = 'details' | 'payment' | 'preferences';

const Profile = (): JSX.Element => {
  const classes = useStyles()
  const { tab } = useParams<{ tab?: TabName }>()
  const [value, setValue] = useState<TabName>(tab || 'details')

  const handleChange = (event: ChangeEvent<unknown>, newValue: TabName) => {
    setValue(newValue)
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: string;
    value: string;
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
        <Tab label='Account Details' value='details' />
        <Tab label='Payment Method' value='payment' />
        <Tab label='Email Preferences' value='preferences' />
      </Tabs>

      <TabPanel value={ value } index='details'>
        <AccountDetails />
      </TabPanel>
      <TabPanel value={ value } index='payment'>
        <AddPayment />
      </TabPanel>
      <TabPanel value={ value } index='preferences'>
        <EmailPreferences />
      </TabPanel>
    </div>
  )
}

export default Profile

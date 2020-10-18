import React, { ChangeEvent, useState } from 'react'
import { ProfileQuery } from 'types/graphql'
import ProfilePicture from 'app/profile/ProfilePicture'
import { Typography, Tabs, Tab, Box } from '@material-ui/core'
import useStyles from './styles'
import EmailPreferences from 'app/profile/EmailPreferences'

interface Props {
  data: ProfileQuery;
}

const Profile = ({
  data: {
    viewer: { profilePictureUrl, email },
  },
}: Props): JSX.Element => {
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
        id={ `vertical-tabpanel-${index}` }
        aria-labelledby={ `vertical-tab-${index}` }
        { ...other }
      >
        {value === index && <Box p={ 3 }>{children}</Box>}
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
        aria-label='Vertical tabs example'
        className={ classes.tabs }
      >
        <Tab label='Account' />
        <Tab label='Email Preferences' />
      </Tabs>

      <TabPanel value={ value } index={ 0 }>
        <Typography>Email: {email}</Typography>
        <ProfilePicture profilePictureUrl={ profilePictureUrl } />
      </TabPanel>
      <TabPanel value={ value } index={ 1 }>
        <EmailPreferences />
      </TabPanel>
    </div>
  )
}

export default Profile

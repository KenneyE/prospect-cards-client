import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import useStyles from './styles'
import ExpandPlusIcon from 'assets/svg/ExpandPlusIcon'

interface Props {
  children: JSX.Element;
  title: string;
}

const CollabsibleSearch = ({ title, children }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <Accordion aria-controls={ `${title} Search` }>
        <AccordionSummary expandIcon={ <ExpandPlusIcon /> }>
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CollabsibleSearch

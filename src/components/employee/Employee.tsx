import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import Header from '../Header'
import DsrDetails from './dsrDetails.jsx/DsrDetails'
import { Box, Grid } from '@mui/material'
import EligibilityDetails from './eligibility/EligibilityDetails'
import TeamComponent from './teamMembers/TeamComponent'
import QucikLinks from './quickLinks/QucikLinks'
import PendingAction from './pendingAction/PendingAction'

const Employee = () => {
  return (
    <>
    <div className='Employee'>
        <Header />
        <EmployeeDetails />
        <Box sx={{background: "white", pl: 3, pb: 5, pt: 0.5, borderRadius: 2}}>
          <DsrDetails />
        </Box>
        <Grid container>
          <Grid item xs={8.3} sx={{background: "white", pl: 3, pb: 5, pt: 0.5, my: 3, borderRadius: 2, height: "350px"}}>
            <EligibilityDetails />
          </Grid>
          <Grid item xs={3.5} sx={{background: "white", pl: 3, pb: 5, pt: 0.5, my: 3, ml: "auto", borderRadius: 2, height: "350px"}}>
            <TeamComponent />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6} sx={{background: "white"}}>
            <QucikLinks />
          </Grid>
          <Grid item xs={6} sx={{background: "white"}}>
            <PendingAction />
          </Grid>
        </Grid>
    </div>
    </>
  )
}

export default Employee
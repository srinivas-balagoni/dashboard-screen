import { Box } from '@mui/material'
import React from 'react'
import Details from './Details'
import EmployeeCard from './EmployeeCard'

const EmployeeDetails = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box mx={10}>
        <EmployeeCard />
      </Box>
      <Details />
    </Box>
  )
}

export default EmployeeDetails
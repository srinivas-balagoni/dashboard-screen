import React from 'react'
import DsrCard from './DsrCard'
import { Box } from '@mui/material'

const DsrDetails = () => {
  return (
    <Box>
      <h3>Staff DSR Details</h3>
      <Box sx={{ display: "flex" }}>
        <DsrCard color="#4A149C" number="6.02" name="Credit Card"/>
        <DsrCard color="#01579B" number="0.0" name="Staff Loan"/>
        <DsrCard color="#004D40" number="4.00" name="Commercial Loan"/>
        <DsrCard color="#E65100" number="6.02" name="Staff Loan + Commercial Loan DSR"/>
      </Box>
    </Box>
  )
}

export default DsrDetails
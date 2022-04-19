import { Box, Typography } from '@mui/material'
import React from 'react'
import Member from './Member'

const TeamComponent = () => {
  return (
    <>
      <Box sx={{display: "flex", justifyContent:"space-between", position:"relative"}}>
        <h3>You Team </h3>
        <Typography sx={{fontSize:"12px", position:"absolute", top:"50%", transform: "translate(0%, -50%)",right: "20px"}}>15 Members</Typography>
      </Box>
      <Box sx={{overflowY: "auto", height: "255px", mr: .5,
        '&::-webkit-scrollbar': {
            width: '0.3em'
          },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            borderRadius: "10px",
            backgroundColor: '#F8F9FC',
          },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#DDE0E9',
            borderRadius: "10px",
          }
      }}>
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
        <Member name="John Doe" role="Vide President" />
        <Member name="Ramkumar Rajkumar" role="Manager" />
        <Member name="Manoj Kumar" role="Assistant Manager" />
        <Member name="Subashini" role="Lead" />
        <Member name="Deepak Sivagurunathan" role="Lead Architech" />
      </Box>
    </>
  )
}

export default TeamComponent
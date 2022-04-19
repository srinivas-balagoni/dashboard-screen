import React from 'react'
import { Box, Typography } from '@mui/material'

type propTypes = {
  color: string,
  number: string,
  name: string
}

const DsrCard = (props: propTypes) => {
  return (
    <Box mr={3} sx={{ width: "224.87px", height: "116px", background: props.color,  borderRadius: "6px", color: "white"}}>
      <Typography sx={{ml:2, mt:4, fontSize:"40px", fontWeight: "600"}}>{props.number}</Typography>
      <Box component="p" sx={{ml:2, my:0, fontSize:12}}>{props.name}</Box>
    </Box>
  )
}

export default DsrCard
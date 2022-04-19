import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import photo from './Oval.png'

type propTypes = {
    name: string,
    role: string
}

const Member = (props: propTypes) => {
  return (
    <Box sx={{display: "flex", mb:2}}>
        <Box component="img" src={photo} alt="Profile_pic" sx={{width: "35px", height: "35px", mr:2}} />
        <Box>
            <Typography sx={{fontSize: "14px", fontWeight: "700", lineHeight:"17px"}}>{props.name}</Typography>
            <Typography sx={{fontSize: "12px", lineHeight:"15px", color: "#738794"}}>{props.role}</Typography>
        </Box>
    </Box>
  )
}

export default Member
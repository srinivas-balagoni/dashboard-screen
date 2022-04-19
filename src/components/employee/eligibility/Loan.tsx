import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

type propTypes = {
    color: string,
    number: number,
    text1: string,
    text2: string
}
const Loan = (props: propTypes) => {
  return (
      <Box sx={{mb:3}}>
        <Box sx={{display: "flex", mb:"2px"}}>
            <HomeOutlinedIcon sx={{color:'#738794', mr:2, fontSize: "25px"}}/>
            <Box>
                <Typography sx={{fontSize: "10px", color: "#738794"}}>{props.text1}</Typography>
                <Typography sx={{fontWeight: "Bold", fontSize: "14px"}}>{props.text2}</Typography>
            </Box>
        </Box>
        <Box sx={{maxWidth: "250px", width: `${props.number/1000}%`, height: 5, borderRadius: 2, background: `${props.color}`}}></Box>
    </Box>
  )
}

export default Loan
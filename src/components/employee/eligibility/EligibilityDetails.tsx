import { Box, Grid, Typography } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DoughnutChart from './DoughnutChart'
import {Chart, ArcElement} from 'chart.js'
import LoanComponent from './LoanComponent';
Chart.register(ArcElement);

const EligibilityDetails = () => {
  return (
    <>
        <Box sx={{display: "flex", justifyContent:"space-between", position:"relative"}}>
          <h3>Your Eligibility</h3>
          <Typography component="h6" sx={{color:"#FF5E00", fontSize:"14px", position:"absolute", top:"50%", transform: "translate(0%, -50%)",right: "20px", mr:3}}>
            Apply for Loan
            <ChevronRightOutlinedIcon sx={{position: "absolute"}} />
          </Typography>
        </Box>
        <Grid container>
            <Grid item xs={4}>
                <LoanComponent />
            </Grid>
            <Grid item xs={4}>
                <DoughnutChart />
            </Grid>
        </Grid>
    </>
  )
}

export default EligibilityDetails
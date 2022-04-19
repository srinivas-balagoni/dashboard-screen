import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
Chart.register(ArcElement);

const chartColors = [
    "#5C6BC0",
    "#26A69A",
    "#D4E157",
    "#FF5E00"
  ];

const chartColors2 = [
    "#DDE0E9",
    "#80B79E"
  ];

const options = {
    cutout: 70,
    legend: {
        display: false,
    },
    elements: {
        arc: {
            borderWidth: 1.5
        }
    },
};

const data = {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: [50, 45, 30, 65],
        backgroundColor: chartColors,
        radius: 80
      }
    ]
};
const data2 = {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: [35, 65],
        backgroundColor: chartColors2,
        radius: 80
      }
    ]
};

const DoughnutChart = () => {
  return (
      <div style={{position: "relative", display: "flex"}}>
        <Doughnut data={data} options={options} />
        <Box sx={{position: "absolute", top: "50%", transform: "translate(75%, -50%)", textAlign: "center"}}>
            <Typography sx={{fontSize: "10px", color: "#738794"}}> Total Eligibility </Typography>
            <Typography sx={{fontWeight: "Bold", fontSize: "14px"}}>AED 200,000</Typography>
        </Box>
        <Doughnut data={data2} options={options} />
        <Box sx={{position: "absolute", top: "50%", transform: "translate(265%, -50%)",textAlign: "center", right: 0}}>
            <Typography sx={{fontSize: "10px", color: "#738794"}}> Total Used </Typography>
            <Typography sx={{fontWeight: "Bold", fontSize: "14px"}}>58%</Typography>
        </Box>
    </div>
  )
}

export default DoughnutChart
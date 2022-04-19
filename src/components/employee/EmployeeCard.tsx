import React from 'react'

import jessicaIMG from './Jessica.png';

const EmployeeCard = () => {
  return (
    <div>
        <img src={jessicaIMG} alt="jessica"></img>
        <h3>Jessica Abrahm</h3>
        <p>Staff Member: 12345667</p>
    </div>
  )
}

export default EmployeeCard
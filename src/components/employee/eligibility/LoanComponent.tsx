import React from 'react'
import Loan from './Loan'

const LoanComponent = () => {
  return (
    <>
      <Loan color="#FF5E00" number={75000} text1="Rent Loan" text2="AED 75,000"/>
      <Loan color="#5C6BC0" number={50000} text1="Cash Loan" text2="AED 50,000"/>
      <Loan color="#26A69A" number={40000} text1="Personal Loan" text2="AED 40,000"/>
      <Loan color="#D4E157" number={35000} text1="Furniture Loan" text2="AED 35,000"/>
    </>
  )
}

export default LoanComponent
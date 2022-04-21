import React, { useEffect } from 'react'
import Loan from './Loan'
import { fetchUsers } from '../../../redux'
import { connect } from 'react-redux'

const LoanComponent = (props: any) => {
  useEffect(() => {
    props.fetchUsers()
  },[])
  console.log(props.userData.users)
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>{ props.userData.error }</h2>
  ) : (
    <>
      <Loan color="#FF5E00" number={props.userData.users.rent} text1="Rent Loan" text2={`AED ${props.userData.users.rent}`}/>
      <Loan color="#5C6BC0" number={props.userData.users.cash} text1="Cash Loan" text2={`AED ${props.userData.users.cash}`}/>
      <Loan color="#26A69A" number={props.userData.users.personal} text1="Personal Loan" text2={`AED ${props.userData.users.personal}`}/>
      <Loan color="#D4E157" number={props.userData.users.furniture} text1="Furniture Loan" text2={`AED ${props.userData.users.furniture}`}/>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
      userData: state.user
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanComponent)
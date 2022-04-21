import React, { useEffect } from 'react'
import { fetchUsers } from '../../redux'
import { connect } from 'react-redux'

// const Manager = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://virtserver.swaggerhub.com/fragmadata/MSHRA-HR-MVP/1.0.0/LoanEligibility')
//     .then(res => res.json())
//     .then(setData)
//   },[])
//   return (
//     <>
//       <h1>Manager</h1>
//       <p>{JSON.stringify(data)}</p>
//     </>
//   )
// }

const Manager = (props: any) => {
  useEffect(() => {
    props.fetchUsers()
  },[])
  console.log(props.userData)
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>{ props.userData.error }</h2>
  ) : (<h1>{props.userData.users.rent}</h1>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Manager)
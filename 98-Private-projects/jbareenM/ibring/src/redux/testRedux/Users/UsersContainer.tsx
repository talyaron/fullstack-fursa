import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../';

function UsersContainer({ userData, fetchUsers }: any) {
  useEffect(() => {
    fetchUsers()
  }, [])

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {
          userData && userData.users && userData.users.map((user:any, index:number) => <p key={index}>{user.name}</p>)
        }
      </div>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    userData: state.user
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
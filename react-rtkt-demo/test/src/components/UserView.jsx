import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../features/user/userSlice'
function UserView() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.user)
  useEffect(()=> {
    dispatch(fetchUsers())
    // console.log(users)
  },[])
  // console.log(users);
  return (
    <div>
    {users.loading && <div>loading</div>}
    {/* if loading is false and error contains data */}
    {!users.loading && users.error ? <div>error: {users.error}</div>: null}
    {!users.loading && users.users.length ? (users.users.map(user=>(<ul>
      <li key={user.id}>{user.name}</li>
    </ul>))) : null}
    </div>
  )
}

export default UserView
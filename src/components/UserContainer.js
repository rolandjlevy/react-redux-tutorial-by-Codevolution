import React, { useEffect } from 'react';
import { fetchUsers } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

function UserContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  const userData = useSelector(state => state.user);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      {
        userData &&
        userData.users &&
        userData.users.map(user => (<p key={user.id}>{user.name}</p>))
      }
      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
    </div>
  )
}

export default UserContainer;
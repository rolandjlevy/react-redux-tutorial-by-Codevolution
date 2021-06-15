import React from 'react';
import { fetchUsers } from '../redux';
import { useDispatch } from 'react-redux';

function UserContainer() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
    </div>
  )
}

export default UserContainer;
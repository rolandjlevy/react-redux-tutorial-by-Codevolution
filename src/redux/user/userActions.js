import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes.js';

import axios from 'axios';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios.get(url)
    .then(response => {
      dispatch(fetchUsersSuccess(response.data));
    })
    .catch(err => {
      dispatch(fetchUsersFailure(err.message));
    });
  }
}
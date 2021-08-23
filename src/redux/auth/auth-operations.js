import axios from 'axios';

import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
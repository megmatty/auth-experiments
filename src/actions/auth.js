import axios from 'axios';
import { browserHistory } from 'react-router';
const API_URL = 'http://localhost:8080';
const CLIENT_ROOT_URL = 'http://localhost:3000';
const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

export function registerUser({ email, username, password }) {
  console.log('registerUser');
  return (dispatch) => {
     return axios(`${API_URL}/signup`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      }).then(response => {
    })
    // axios.post(`${API_URL}/signup`, { email, password })
    // .then((response) => {
    //   console.log(response);
    //   // dispatch({ type: 'USER', payload:response });
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };
}
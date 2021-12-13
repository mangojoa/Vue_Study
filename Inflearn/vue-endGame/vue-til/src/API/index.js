import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

// const instance = axios.create({
//   baseUrl: process.env.VUE_APP_API_URL,
// });

function registerUser(userData) {
  const url = `${baseUrl}signup`;
  return axios.post(url, userData);
  // return instance.post('signup', userData);
}

function loginUser(userData) {
  const url = `${baseUrl}login`;
  return axios.post(url, userData);
  // return instance.post('login', userData);
}

export { registerUser, loginUser };

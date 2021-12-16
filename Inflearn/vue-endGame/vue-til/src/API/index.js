import axios from 'axios';
import store from '../store';
import { setInterceptors } from './common/interceptors';

/*
interceptor의 필요성
Authorization: token 값 이 들어가야 하는데 제대로 들어가지 못하는 상황이다.
그렇기에 여기서 interceptor를 사용하여 Authorization에 token값을 넣는다.

이를 위해서는 Instance의 모듈화가 필요하다.
*/

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
      Authorization: store.state.token,
    },
  });
  return setInterceptors(instance);
  // 앞에서 instance를 공통 설정한 후에 interceptors로 instance를 넘겨준다.
}

const instance = createInstance();

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

function fetchPosts() {
  return instance.get('posts');
}

export { registerUser, loginUser, fetchPosts };

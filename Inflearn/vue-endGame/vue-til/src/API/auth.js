/*
Authorization의 개념을 통한 instance를 나누었다면 이를 사용할 API함수 들에 적용을 해야한다.
createInstance의 경우, 회원가입 / 로그인 API에만 사용될 instance이다.
*/
import { instance } from './index';

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };

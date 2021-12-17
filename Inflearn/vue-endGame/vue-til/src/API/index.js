import axios from 'axios';
import { setInterceptors } from './common/interceptors';

/*
Authorization의 경우 로그인 이후에 필요한 값이기에 회원가입과 로그인 API를 작동 시키는데 문제가 있을 수 있다.
그렇기에 API도 모듈화가 필요한 부분이 있다. 그에 대한 기준은 API의 특성마다 다를 수 있으나 
여기서는 Authorization을 기준으로 하겠다.
*/

// [21.12.17] Authorization을 사용하지 않는 개념의 instance를 하나 생성한다.
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// 액시오스 초기화 함수
function CreateInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

/*
Authorization의 개념을 통한 instance를 나누었다면 이를 사용할 API함수 들에 적용을 해야한다.
createInstance의 경우, 회원가입 / 로그인 API에만 사용될 instance이다.
posts의 경우, 로그인 이후 처리되는 모든 API에서 사용될 instance이다.
*/
export const instance = createInstance();
export const posts = CreateInstanceWithAuth('posts');

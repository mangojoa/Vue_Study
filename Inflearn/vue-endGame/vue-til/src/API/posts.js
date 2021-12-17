/*
Authorization의 개념을 통한 instance를 나누었다면 이를 사용할 API함수 들에 적용을 해야한다.
posts의 경우, 로그인 이후 처리되는 모든 API에서 사용될 instance이다.
*/
import { posts } from './index';

// 학습 노트 데이터를 조회하는 API
function fetchPosts() {
  return posts.get('/');
}

// 학습 노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}

export { fetchPosts, createPost };

export function setInterceptors(instance) {
  // 넘겨받은 instance를 axios대신에 사용한다.
  // Add a request interceptor
  instance.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    },
  );
  return instance;
  // 그리고 이를 다시 리턴해준다.
}

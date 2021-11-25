import axios from 'axios';
export default {
    methods: {
        async $callAPI(url, method, data) { // 함수명 앞의 '$'는 동일한 메소드명이 있어서 오버라이딩 되는 것을 방지하기 위해서이다.
            return (await axios({
                method: method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
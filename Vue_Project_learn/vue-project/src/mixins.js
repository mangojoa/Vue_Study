import axios from 'axios';

// 해당 mixins.js를 사용하기 위해서는 main.js에 등록해야 한다. 
export default {
    methods: {
        async $api(url, method, data) {
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
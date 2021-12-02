/*
하이 오더 컴포넌트 (컴포넌트의 코드를 재사용하는 기술)
*/

import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return { // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리

        /*
        여기서는 분기처리를 위한 코드이다.
        this.$store.dispatch('FETCH_LIST)
        */
        name: 'HO Component',
        created() {
            bus.$emit('start:spinner');
            // setTimeout(() => {
              this.$store.dispatch('FETCH_LIST', this.$route.name)
              .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
              })
              .catch((error) => {
                console.log(error);
              });
            // }, 3000);
        },
        
        render(createElement) {
            return createElement(ListView);
        }
    }
}
import { createStore, Store } from 'vuex'

const store = createStore({
    /*
    state는 프로젝트 전체에서 공통으로 사용할 변수를 정의하는 곳
    state에 변수를 정의함으로써, 모든 컴포넌트에서 사용 가능합니다. 

    state에 정의된 변수는 Vue 컴포넌트에서는 computed 속성을 이용해서 그 변경사항을 항상 추적한다.
    */
    state () {
        return {
            count: 0,
            cart: [{
                product_id: 1,
                product_name: '아이폰 거치대',
                category: 'A'
            }]
        }
    },
    /*
    state에 변수로 관리를 하고 있는 데이터를 getters를 정의하여 쉽게 가져올 수 있다.
    */
    getters: {
        cartCount: (state) => {
            return state.cart.length;
        }
    },
    /*
    state에 정의된 변수를 직접 변경하는 것을 허용하지 않는다.
    반드시 mutations응 이용해서 변경해야 합니다. 즉 mutations은 state을 변경시키는 역할을 합니다.

    mutations은 비동기처리가 아니라 동기처리를 통해 state에 정의된 변수의 변경사항을 추적할 수 있게 해준다.

    mutations에 정의된 함수를 commit를 통해서 호출하는 것으로 저장소의 state에 정의된 변수의 값을 변경할 수 있다.
    */
    mutations: {
        increment (state) {
            state.count++;
        }
    },
    /*
    action을 통해 mutations에 정의된 함수를 실행 시킬 수 있다. 

    굳이 action을 사용해야 하는가 ?
    actions에 정의된 함수 안에서는 여러개의 mutations을 실행시킬수 있을 뿐만 아니라, mutations과 달리 비동기 작업이 가능하다.

    즉, actions에 등록된 함수는 비동기 처리 후 mutations을 커밋할 수 있어서 store에서 비동기 처리 로직을 관리할 수 있게 해준다.
    */
    actions: {
        increment(context) {
            // 비동기 처리 로직 수행 가능
            context.commit('increment');
        }
    }
})

export default Store;
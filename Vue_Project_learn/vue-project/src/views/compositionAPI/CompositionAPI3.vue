<template>
  <div>
      <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2" />
            <span> = </span>
            <span> {{ state.result }}</span>
        </div>
  </div>
</template>

<script>
/*
컴포넌트 안에서는 v-model 디렉티브를 통해 바인딩 된 변수가 사용자의 입력값이 바뀔때마다 반응형으로 처리가 되었다. 

하지만 함수를 컴포넌트 밖으로 빼면 사용자가 입력한 값에 대한 반응현 처리가 불가능해진다.

그래서 toRef를 사용하려 컴포넌트 밖에서도 반응현 처리가 가능하도록 할 수 있다. 
*/

/*
다음 아래의 외부 코드 부분을 common.js 로 옮겨 재사용 가능하도록 만들어보겠다. 
*/
import { reactive, computed, toRef } from 'vue'; // toRef 추가
function plusCalculator() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });

    return toRef(state); // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 
                         // 동작하기 위해서는 toRef를 사용해야 한다.
}
export default {
    name: 'calculator',
    setup() {
        let { num1, num2, result } = plusCalculator(); // 외부 function
        return {
            num1, num2, result
        }
    }
}
</script>

<style>

</style>
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
import {plusCalculator} from './common.js'; // 재사용하도록 만든 common.js를 import해서 사용한다.
/*
compositionAPI3 와 비교하면 외부 Function이 없어진 코드라고 생각할 수 있다. 

하지만 plusCalculator()의 함수를 import하는 형식으로 바꿈으로써 코드의 간결성과 재사용성을 높였다는 점에 중점을 둬야한다. 
*/
export default {
    name: 'calculator',
    setup() {
        let {num1, num2, result} = plusCalculator();

        return {
            num1, num2, result
        }
    }
}
</script>

<style>

</style>
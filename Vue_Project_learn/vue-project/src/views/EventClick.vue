<template>
  <div>
      <button type="button" @click="increaseCounter"> Add ++ </button>
      <button type="button" @click="setCount(7)"> 7 </button>
      <button type="button" @click="one()"> click </button>
      <p>The counter is : {{counter}}</p>
  </div>
</template>

<script>
/*
v-on 디렉티브를 사용하여 Event를 구현
Event를 통해 메소드 실행 / 데이터 전달등 을 구현할 수 있습니다. 

*/
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter = this.counter +1;
        },
        setCount(counter) {
            this.counter = counter;
        },
        one() {
            alert('what the heck');
        }

    }
}
</script>

<style>

</style>
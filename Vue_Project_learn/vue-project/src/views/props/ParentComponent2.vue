<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
  <button type="button" @click="changeChildData"> Change Child Data </button>
</template>

<script>
/*
부모 => 자식 컴포넌트의 데이터 옵션 값 직접 변경하기

Function 에서 this.$refs.child_component.msg에 데이터를 담는 것과 동시에 

자식 컴포넌트의 data 값에 msg를 바인딩을 실시한다. 
이로 인해, 자식 컴포넌트의 {{ msg }} 값이 변경되는 원링
*/
import ChildComponent from './ChildComponent2.vue'
export default {
  components: { ChildComponent },
    methods: {
        changeChildData() {
            this.$refs.child_component.msg = "부모 컴포넌트가 변경한 데이터";
        }
    }
}
</script>

<style>

</style>
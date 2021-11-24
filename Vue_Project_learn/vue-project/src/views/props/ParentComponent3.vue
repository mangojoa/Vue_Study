<template>
  <div>
      <child-component-3 @send-message="sendMessage" />
  </div>
</template>

<script>
/*
자식 컴포넌트에서 부모 컴포넌트로 이벤트로 전달하기 위해서는 $emit 를 사용

자식 컴포넌트가 mounted 되면 $emit을 통해 부모 컴포넌트의 send-message 이벤트를 호출한다. 

커스텀 이벤트인 send-message는 자식 컴포넌트에서 $emit으로 호출

이때 부모 컴포넌트에 정의된 sendMessage 함수가 실행되고, 자식 컴포넌트로부터 전달받은 데이터를 
부모 컴포넌트에서 사용할 수 있다.
*/
import ChildComponent3 from './ChildComponent3.vue'
export default {
  components: { ChildComponent3 },
  methods: {
      sendMessage(data) {
          console.log(data);
      }
  }

}
</script>

<style>

</style>
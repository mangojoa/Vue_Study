<template>
  <child-component @send-message="sendMessage" ref="child_component"/>
</template>

<script>
/*
ref를 이용한 부모 => 자식 컴포넌트의 이벤트 발생 (Function도 같은 원리)
자식 컴포넌트의 버튼 객체에 ref="btn"로 접근할 수 있도록 되어있다.
이를 이용하여 mounted에서 this.$refs를 통해 접근할 수 있다.

부모 컴포넌트에서 자식 컴포넌트인 child-component에 ref="child_component"에 먼저 접근 한후
this.$refs.Child_component 

자식 컴포넌트의 ref="id"값에 접근하여 함수를 실행하는 원리이다.


$refs.btn.click();
*/
import ChildComponent from './ChildComponent.vue'
export default {
  components: { ChildComponent },
    mounted() {
        this.$refs.child_component.$refs.btn.click();
        this.$refs.child_component.callFromParent();
    },
}
</script>

<style>

</style>
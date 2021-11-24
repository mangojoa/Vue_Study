<template>
    <button type="button" @click="checkChild"> 자식 컴포넌트 데이터 조회 </button>
    <child-component ref="child_component"/>
</template>

<script>
/*
부모 컴포넌트에서 computed를 이용하면 자식 컴포넌트에 정의된 데이터 옵션 값의 변경사항을 항상 동기화시킬 수 있다. 

부모 컴포넌트에서 computed 옵션을 사용해서, 자식 컴포넌트의 msg값을 감지하도록 한 후,
computed는 참조되고 있는 데이터의 변경사항을 바로 감지하여 반영 


*/
import ChildComponent from './ChildComponent4.vue'
export default {
  components: { ChildComponent },
  computed: {
      msg() {
          return this.$refs.child_component.msg;
      }
  },
  methods: {
      checkChild() {
          alert(this.msg);
      }
  }

}
</script>

<style>

</style>
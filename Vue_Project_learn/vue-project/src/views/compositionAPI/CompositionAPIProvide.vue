<template>
  <composition-api-inject/>
</template>

<script>
/*
provide / inject 사용하기 

setup() 의 경우 beforeCreated()와 Created() 훅 사이에 실행된다. 
provide => 키, 값을 설정하고 inject으로 보내는 역할
inject => provide로부터 전달받은 데이터를 받는 역할 (key값이 일치해야 한다.)

예제 상으로는 vue lifecycle 에 넣어 사용했기에 렌더링 되는 사이클에 넣어 사용하면 될것이다. 

그리고 provide / inject 는 같이 선언할 수 없고 따로 선언해줘야 한다.
*/
import CompositionAPIInject from './CompositionAPIInject.vue'
export default {
  components: { CompositionAPIInject },
  setup() {
      provide('title', 'Vue.js 프로젝트');
      // provide 함수를 통해서 전달할 키(key), 값(value) 설정
  }

}
</script>

<style>

</style>
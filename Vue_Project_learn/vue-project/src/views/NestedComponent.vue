<template>
  <div>
      <page-title :title="title"/>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue' // import component
export default {
  components: { PageTitle }, // 현재 컴포넌트에서 사용할 컴포넌트 등록
  data() { // [: => 'v-bind' 의 약어] :title="title"를 통해 동적으로 전달 

      return {
          title:'동적페이지 타이틀'
      };
  }
}
</script>

<style>

</style>
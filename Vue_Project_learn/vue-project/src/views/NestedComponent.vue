<template>
  <div>
      <page-title title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue' // import component
export default {
  components: { PageTitle }, // 현재 컴포넌트에서 사용할 컴포넌트 등록
}
</script>

<style>

</style>
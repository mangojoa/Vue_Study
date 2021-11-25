<template>
  <div class="header">
    <!-- router-link = ? a tag의 개념이라고 보면 된다. -->
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> 

  </div>
</template>

<script>
/*
편하게 네비게이팅 하는 툴바(header component) 구성
*/
export default {

}
</script>
 
<style scoped> 
  .header {
    color: white;
    background-color:  #42b883;
    display: flex;
    padding: 8px;
  }
  .header a:router-link-exact-active {
    color: #35495e;
  }
  .header a {
    color: white;
  }
</style>
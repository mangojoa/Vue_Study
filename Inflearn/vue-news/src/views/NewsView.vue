<template>
  <div>
    <div :key="i" v-for="(user, i) in users"> {{ user.title }}</div>
  </div>
</template>

<script>
import {fetchNewsList} from '../API/index.js'
export default {
  data() {
    return {
      users: []
    };
  },
  /*
  component에서 Vuex를 불러오기 위해서는 dispatch 
  */
  created() {
      this.$store.dispatcd('FETCH_')
    /* Vuex를 통한 api 연결을 위해 주석처리 
    fetchNewsList()
      .then( res => {
        this.users = res.data;
      })
      .catch( e => {
        console.log(e)
      })
    */
  }
}
</script>

<style>

</style>
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
  created() {
    var vm = this;
    fetchNewsList()
      .then( res => {
        vm.users = res.data;
      })
      .catch( e => {
        console.log(e)
      })
  }
}
</script>

<style>

</style>
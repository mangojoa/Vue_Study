<template>
  <div>
      <div :key="i" v-for="(user, i) in jobs">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../API/index.js'
export default {
  data() {
    return {
      jobs: []
    };
  },
  created() {
    fetchAskList()
      .then( res => {
        this.jobs = res.data;
        console.log(res)
      })
      .catch( e => {
        console.log(e)
      })

  }
}
</script>
<style>

</style>
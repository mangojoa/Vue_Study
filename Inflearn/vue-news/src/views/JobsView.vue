<template>
  <div>
      <div :key="i" v-for="(user, i) in ask">{{ user.title }}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../API/index.js'
export default {
  data() {
    return {
      ask: []
    };
  },
  created() {
    fetchJobsList()
      .then(res => {
        this.ask = res.data;
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style>

</style>
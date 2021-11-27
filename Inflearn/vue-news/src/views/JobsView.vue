<template>
  <div>
      <div :key="i" v-for="(user, i) in this.$store.state.jobs">{{ user.title }}</div>
  </div>
</template>

<script>
// import {fetchJobsList} from '../API/index.js'
export default {
  created() {
      this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(res => {
    //     this.jobs = res.data;
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  }
}
</script>

<style>

</style>
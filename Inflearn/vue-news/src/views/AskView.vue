<template>
  <div>
    <div :key="i" v-for="(user, i) in this.$store.state.ask">{{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../API/index.js'
export default {
  created() {
      this.$store.dispatch('FETCH_ASK');
    // fetchAskList()
    //   .then( res => {
    //     this.ask = res.data;
    //     console.log(res)
    //   })
    //   .catch( e => {
    //     console.log(e)
    //   })
  }
}
</script>
<style>

</style>
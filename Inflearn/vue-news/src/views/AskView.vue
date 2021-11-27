<template>
  <div>
    <div :key="i" v-for="(user, i) in fetchedAsk">{{ user.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../API/index.js'
import { mapGetters } from 'vuex';
export default {
  computed: {
    // #3
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
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
<template>
  <div>
    <p :key="i" v-for="(item, i) in askItems">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small> {{ item.time_ago }} by {{ item.user }} </small>
    </p>
  </div>
</template>

<script>
// import { fetchAskList } from '../API/index.js'
import { mapGetters } from 'vuex';
export default {
  computed: {
    // #3
    ...mapGetters({
      askItems: 'fetchedAsk'
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
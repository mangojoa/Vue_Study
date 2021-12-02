<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { fetchAskList } from '../API/index.js'
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_ASK')
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    }, 3000);
  }
  /*
  computed: {
    #3
    ...mapGetters({
      askItems: 'fetchedAsk'
    })

    #2
    ...mapState({
      ask: state => state.ask
    }),

    #1
    ask() {
      return this.$store.state.ask;
    }
  },
  created() {
      this.$store.dispatch('FETCH_ASK');
    }

    fetchAskList()
      .then( res => {
        this.ask = res.data;
        console.log(res)
      })
      .catch( e => {
        console.log(e)
      })
  */
}
</script>
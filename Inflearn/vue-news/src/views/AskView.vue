<template>
  <div>
    <ul class="ask-list">
      <li :key="i" v-for="(item, i) in askItems" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text"> 
            {{ item.time_ago }} by 
              <router-link :to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
              </router-link>
          </small>
        </div>
      </li>
    </ul>
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
<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
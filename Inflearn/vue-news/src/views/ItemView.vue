<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time"> {{ 'Posted ' + fetchedItem.time_ago }} </template>
      </user-profile>
    </section>
      <section>
        <h2>Ask : {{ fetchedItem.title }}</h2>
      </section>
    <section>
      <!-- 
        html tag 를 가지고 있는 데이터의 경우
        v-html 을 활용하자. 
       -->
       <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
     UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemid = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemid);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-discription {
  padding-left: 8px;
}
.time {
  font-size: 7px;
}
</style>
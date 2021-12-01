<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
/*
UserView -> UserProfile 로 데이터를 전달하는 방법 
1. props
2. computed를 통한 데이터 전달 (거의 vuex를 통한 방법이라고 봐도 무방)
*/
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>
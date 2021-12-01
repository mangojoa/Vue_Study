<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }

  /*
  component에서 Vuex를 불러오기 위해서는 dispatch를 사용한다.

  created() {
      this.$store.dispatch('FETCH_NEWS');
  }
  dispatch를 하는 순간 dispatch로 제어권이 넘어가게 된다.
  
  Vuex를 통한 api 연결을 위해 주석처리 
  fetchNewsList()
    .then( res => {
      this.users = res.data;
    })
    .catch( e => {
      console.log(e)
    })
  */
  
}
</script>
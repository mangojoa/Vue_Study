<template>
  <div>
    <ul class="news-list">
      <li :key="i" v-for="(item, i) in this.$store.state.news" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import {fetchNewsList} from '../API/index.js'
export default {
  /*
  component에서 Vuex를 불러오기 위해서는 dispatch를 사용한다.
  */
  created() {
      this.$store.dispatch('FETCH_NEWS'); 
      // dispatch를 하는 순간 dispatch로 제어권이 넘어가게 된다.


    /* Vuex를 통한 api 연결을 위해 주석처리 
    fetchNewsList()
      .then( res => {
        this.users = res.data;
      })
      .catch( e => {
        console.log(e)
      })
    */
  }
}
</script>

<style scoped>
.news-list {
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
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-discription">
          <router-link :to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <div class="time">
            {{ itemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>Ask : {{ itemInfo.title }}</h2>
    </section>
    <section>
      <!-- 
        html tag 를 가지고 있는 데이터의 경우
        v-html 을 활용하자. 
       -->
       <div v-html="itemInfo.content">
         {{ itemInfo.content }}
       </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
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
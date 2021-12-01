<template>
  <div>
    <ul class="news-list">
      <li :key="i" v-for="(item, i) in listItems" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
              <router-link 
              v-bind:to="`/user/${item.user}`"
              v-if="item.user"
              class="link-text" >
                {{ item.user }}
              </router-link>
              <a :href="item.url" v-else>
                {{ item.domain }}
              </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    /*
    컴포넌트 공통화를 위해서는 dispatch의 분기처리가 필요하다. 

    그렇다면 그 분기처리의 기준점이 무엇인가? => 여기서는 router의 name 속성을 이용해보겠다. 
    created() {
        const name = this.$route.name;
        if (name === 'news') {
            this.$store.dispatch('FETCH_NEWS');
        } else if (name === 'ask') {
            this.$store.dispatch('FETCH_ASK');
        }   else if (name === 'jobs') {
            this.$store.dispatch('FETCH_JOBS');
        }
    },
    */
    computed: {
        listItems() {
            const name = this.$route.name;
            if (name === 'news') {
                return this.$store.state.news;
            } else if (name === 'ask') {
                return this.$store.state.ask;
            } else if (name === 'jobs') {
                return this.$store.state.jobs;
            }
        }
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
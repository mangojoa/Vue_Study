<template>
  <div>
    <ul class="jobs-list">
      <li :key="i" v-for="(item, i) in this.$store.state.jobs" class="post">
        <div class="points">
          {{ item.type }}
        </div>
        <div>
          <p class="jobs-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import {fetchJobsList} from '../API/index.js'
export default {
  created() {
      this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(res => {
    //     this.jobs = res.data;
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  }
}
</script>

<style scoped>
.jobs-list {
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
.jobs-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
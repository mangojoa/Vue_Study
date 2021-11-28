<template>
  <div>
    <p :key="i" v-for="(item, i) in this.$store.state.jobs">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <smai> {{ item.time_ago }} , {{ item.domain }} </smai>
    </p>

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

<style>

</style>
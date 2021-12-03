<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import {fetchJobsList} from '../API/index.js'
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js'
// import bus from '../utils/bus.js'
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin]
  /*
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    }, 3000);
  }
  */
  /*
  created() {
    this.$store.dispatch('FETCH_JOBS');

    fetchJobsList()
      .then(res => {
        this.jobs = res.data;
      })
      .catch(e => {
        console.log(e)
      })
  }
  */
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
<template>
  <div>
    <h1> Chart.js </h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';

// 컴포넌트 속성 && 인스턴스
export default {
  components: {
    BarChart,
    LineChart
  },
}
</script>

<style>

</style>

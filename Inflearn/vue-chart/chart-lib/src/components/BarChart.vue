<template>
    <canvas ref="barChart" id="barChart" width="50" height="50"></canvas>
</template>

<script>
// import { Chart } from 'chart.js'; 플러그인을 등록해서 사용하기에 더이상 필요가 없다.

export default {
    // mounted() 라이프 사이클 훅에서 차트를 그림
    mounted() {
        /*
        이 부분에서도 기존의 Chart를 사용하는 부분인 new Chart()부분이 
        => this.$_Chart로 바뀌어야 한다. (플러그인을 등록했기에 이를 받아오는 인자를 적어야 한다.)
        */
    const barChart = new this.$_Chart(this.$refs.barChart, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(barChart);
    }
}
</script>

<style>

</style>
import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'

Vue.config.productionTip = false

/*
APP이 실행됨과 동시에 ChartPlugin에서 install(); 함수가 실행되어 
어디서든지 chart.js에 접근이 가능하도록 만든다.
*/
Vue.use(ChartPlugin); // 이렇게 플러그인을 등록한다.

new Vue({
  render: h => h(App),
}).$mount('#app')

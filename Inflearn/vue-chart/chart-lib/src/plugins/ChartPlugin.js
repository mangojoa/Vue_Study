/*
인스턴스가 생성 됬을 때, 모든 컴포넌트에 사용하고 싶은 기능을 정의하는 것 => 플러그인

보통은 main.js 에 선언을 했으나 이를 플러그인을 통해 할 수 있다.
*/
import Chart from 'chart.js'

export default {
    install(Vue) {
        /*
        Vue.prototype 개체의 특성을 확장하는 개념이다.
        .$_Chart => 모든 컴포넌트에서 chart.js를 import하기에 코드의 중복이 불가피하게 이루어지고 있다.

        그렇기에 이를 Vue.prototype을 통해 기능을 확정시켜 코드의 중복을 개선하고자 $_Chart를 사용하는 것이다. 
        */
        Vue.prototype.$_Chart = Chart;
    }
}
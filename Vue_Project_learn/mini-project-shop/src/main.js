import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './Mixins/mixins.js'
import store from './store/store.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App);
app.use(router);
app.use(mixins);
app.use(store);
app.use(VueSweetalert2);
app.mount('#app');

window.Kakao.init("1211652984bd8de996314defb93eb98f"); // kakao javaScript 앱 키를 등록
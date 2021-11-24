import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

const app = createApp(App)
app.use(router)
app.mixin(mixins); // import 이후 이렇게 선언해줘야 한다.
app.mount('#app')

// createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18n from './plugins/i18n' // i18n 플러그인 추가

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App)
app.use(router)
app.mixin(mixins); // import 이후 이렇게 선언해줘야 한다.
app.use(i18n, i18nStrings) // i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
app.mount('#app')


app.directive('focus', {
    mounted(el) {
        el.focus() 
        /*
        v-focus 디렉티브를 적용한 html 객체로 포커스를 위치시키도록 작성

        <input type="text" v-focus /> 이렇게 tag안에 v-focus를 작성하면 마우스 포인터가 위치하게 됩니다.
        */
    }
})

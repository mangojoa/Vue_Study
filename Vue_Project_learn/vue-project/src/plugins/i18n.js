/*
다국어를 처리해 주는 플러그인을 제작

플러그인은 install 옵션에서 정의해서 사용할 수 있습니다. 
app.config.globalProperties를 선언하여 컴포넌트에서 $translate로 바로 접근해서 사용할 수 있습니다.
*/

export default {
    install: (app, options) => {
        app.config.globalProperties.$translate = key => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
        app.provide('i18n', options); // i18n 키로 다국어 데이터 전달
    }
}
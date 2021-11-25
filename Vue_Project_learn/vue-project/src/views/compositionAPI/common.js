import {reactive, computed, toRef} from 'vue';

const plusCalculator = () => {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });
    return toRef(state);
}

export {
    plusCalculator
};

/*
재사용이 가능하도록 만든 common.js이다. CompositionAPI3에서의 외부 Function을 js 파일로 만들어 재사용의 용이성을 높였다.
*/
<template>
  <select v-model="selectedValue" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
</template>

<script>
/*
change Event / @change = "MethodName" 으로 많이 사용된다.

Key Event 키보드에서 입력되는 키를 인식하는 이벤트

.enter / .tab / .delete / .esc / .spase / .up / .down / .left / .right 등이 있다. 

example => <input @keyup.enter="submit" />

control / Shift / Alt 키와 같이 사용되는 특수 키의 경우

example => <input @keyup.alt.enter = "clear" />
           <div @click.ctrl="doSomething"> Do Something </div>

*/
export default {
    data() {
        return {
            selectedValue: ''
        };
    },
    methods: {
        changeSelect() {
            alert(this.selectedValue);
        }
    },
}
</script>

<style>

</style>
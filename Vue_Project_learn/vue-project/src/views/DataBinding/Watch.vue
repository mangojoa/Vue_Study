<template>
    <div>
        <h1> Full Name : {{fullName}} </h1>
        <button type="button" @click="changeName"> 변경 </button>
    </div>
</template>

<script>
/*
Watch
watch에 정의된 데이터 값 하나만을 감시하기 위한 용도로 사용

초기에 할당된 값이 반드시 변경이 일어나야만 watch가 실행된다. 
*/
export default {
    data() {
        return {
            firstName: 'Nayuki',
            lastName: '斗山',
            fullName: ''
        };
    },
    watch: {
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        }
    },
    methods: {
        changeName() {
            this.firstName = '明雪';
        }
    },
}
</script>

<style>

</style>
<template>
  <h1> Full Name : {{fullName}} </h1>
</template>

<script>
/*
Computed
Vue 인스턴스 내에 정의된 데이터 값과 연관된 또 하나의 데이터를 정의해서 사용할 수 있도록 해준다.
*/
export default {
    data() {
        return {
            firstName: 'Nayuki',
            lastName: 'Toyama'
        };
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<style>

</style>
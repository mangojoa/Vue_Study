<template>
    <div>
        <p> Count : {{ count }} </p>
        <button type="button" @click="increment"> Increment </button>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count;
        },
        /*
        저장소의 getters에 정의된 값에 접근할 수 있다. 
        */
        cartCount() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        increment() {
            /*
            여기서 저장소의 state에 바로 접근해서 변경하는 것이 아니라,
            mutations은 commit를 통해서만 변경할 수 있다.
            */
            this.$store.commit('increment');
        }
    }
}
</script>

<style>

</style>
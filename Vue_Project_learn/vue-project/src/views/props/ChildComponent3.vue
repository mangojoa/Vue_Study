<template>
  <div>
      console에 데이터가 있을껄 ~ ?
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '자식 컴포넌트로부터 보내는 메세지'
        };
    },
    mounted() {
        this.$emit('send-message', this.msg);
    },
}
</script>

<style>

</style>
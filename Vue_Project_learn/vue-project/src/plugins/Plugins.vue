<template>
  <div>
      <div> cj 사랑해요 </div>
      <h2>{{ $translate("en.hi") }}</h2>
      <h2>{{ i18n.ko.hi }}</h2>
  </div>
</template>

<script>
export default {
    inject: ['i18n'], // provide로 전달된 i18n을 inject로 사용할 수 있다.
    mounted() {
        console.log(this.i18n);
    },
};
</script>

<style>

</style>
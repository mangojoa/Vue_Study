<template>
  <div>
      <input type="text" v-model="valueModel"/>
  </div>
</template>

<script>
/* 
input tag의 경우 type="text" 를 사용하여 만들수 있으며 
단방향 바인딩 된것처럼 보일 수 있으나 이는 양뱡향으로 바인딩 되고 있다. 
*/
export default {
    data() {
        return {
            valueModel: 'South Korea'
        };
    }
}
</script>

<style>

</style>
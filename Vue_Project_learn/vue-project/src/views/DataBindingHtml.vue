<template>
  <div>
      <div>{{htmlString}}</div>
      <!-- 
          html tag 를 바인딩 하기 위해서는 {{}}이중괄호 바인딩이 아닌
          v-html 를 사용하여 바인딩 해야 한다. 
       -->
      <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            htmlString: '<p style="color:red;">This is a red String</p>'
        }
    }
}
</script>

<style>

</style>
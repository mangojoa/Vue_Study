<template>
  <div>
      <h1 v-if="type=='A'">A</h1>
      <h1 v-else-if="type=='B'">B</h1>
      <h1 v-else>C</h1>
  </div>
</template>

<script>
/*
v-if / v-else-if / v-else 의 경우 해당 조건이 만족하거나 없다면 해당하는 html tag를 띄우는 방식이다.

이와 비슷한 v-show 가 있다. 하지만 이는 차이점이 존재한다. 

v-if 의 경우, 조건을 만족하면 그 순간에 html 블록이 생성되고, 만족하지 않는다면 html 블록을 삭제한다.

v-show 의 경우, 조건만족여부에 상관없이 무조건 html 를 생성하며 조건이 만족하면 css/display를 이용해서
화면에 보이게 한다. 조건에 만족하지 않는다면 숨김 처리가 된다. 

이 둘은 자원사용에 따른 차이가 존재하기에 적절한 것을 사용하는 법이 중요하다.
*/
export default {
    data() {
        return {
            type: 'A'
        };
    }
}
</script>

<style>

</style>
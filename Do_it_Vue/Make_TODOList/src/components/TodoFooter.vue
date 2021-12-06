<template>
  <div class="clearAllContainer">
    <!--  @click시 clearTodo Methods를 실행  -->
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    // 클릭시 구동되는 함수
    clearTodo() {
      // 이 작업은 이제 App.vue에서 진행되기에 여기서는 삭제해주도록 한다.
      // localStorage.clear();
      this.$emit('removeAll');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn{
    color: #e20303;
    display: block;
  }
</style>
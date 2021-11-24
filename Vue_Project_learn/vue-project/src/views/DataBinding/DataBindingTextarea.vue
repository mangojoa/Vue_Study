<template>
  <div>
      <textarea v-model="message"></textarea>
  </div>
</template>

<script>
/*
textarea 의 경우, input tag 와 마찬가지로 v-model 를 이용하여 바인딩한다.
*/
export default {
    data() {
        return {
            message: "여러 줄을 입력할 수 있는 textaera 입니다."
        }
    }
}
</script>

<style>

</style>
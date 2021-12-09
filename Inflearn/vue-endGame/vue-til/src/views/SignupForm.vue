<template>
  <!-- prevent => event이후 새로고침을 방지하는 기능 -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">ID : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW : </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">Nickname : </label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <button type="submit">Sign in</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/API/index.js';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    // 비동기 처리가 필요하다. (async를 이용하자)
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      // 제발 위에서 async를 썼다면 await를 통해 확실한 비동기 처리를 하자.
      console.log(data);
      this.logMessage = `${data.username}님 께서 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>

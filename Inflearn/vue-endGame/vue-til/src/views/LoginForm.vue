<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"> ID : </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password"> PW : </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">LOGIN</button>
    <p>{{ loginMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/API/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      loginMessage: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data);
        this.loginMessage = `${data.user.username} 님 환영합니다!`;
      } catch (error) {
        console.log(error.response.data);
        this.loginMessage = error.response.data;
      } finally {
        this.initForm();
      }
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

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Soldout</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target='#navbarSupportContent' aria-controls="navbar녀ㅔㅔㅐㄱㅅ">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link" to="/">
                          HOME
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link active" to="/">
                          Product Lists
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link active" to="/detail">
                          Product Details
                      </router-link>
                  </li>
                  <li v-if="user.email!=undefined" class="nav-item">
                      <router-link clas="nav-link active" to="/sales">
                          Enroll Product Page
                      </router-link>
                  </li>
                  <li v-if="user.email==undefined">
                      <button class="btn btn-danger" type="button" @click="kakaoLogin()">
                          Login
                      </button>
                  </li>
                  <li v-else>
                      <button class="btn btn-danger" type="button" @click="kakaoLogout()">
                          Logout
                      </button>
                  </li>
              </ul>
              <from class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="tn btn-outline-success" type="submit"> Search </button>
              </from>
          </div>
      </div>
  </nav>
</template>

<script>

export default {
    name: 'Header',
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    methods: {
        kakaoLogin(){
            window.Kakao.Auth.login({
                scope: 'profile_nickName, account_email, gender',
                success: this.getProfile
            });
        },
        getProfile() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                    this.login(kakao_account);
                },
                fail: error => {
                    console.log(error);
                }
            });
        },
        async login(kakao_account) {
            try{
                /*
                $api('/api/login', {data}) 의 경우 database가 연동된 상태여야 한다.
                await this.$api("/api/login", {
                    param: [
                        {
                            email: kakao_account.email,
                            nickname: kakao_account.profile.nickname
                        },
                        {
                            nickname: kakao_account.profile.nickname
                        }
                    ]
                });
                */
                this.$store.commit("user", kakao_account);
            } catch(error) {
                console.log(error);
            }
        },
        kakaoLogout() {
            window.Kakao.Auth.logout((res) => {
                console.log(res);
                this.$store.commit("user", {});
                this.$router.push({path:'/'});
            })
        }
    }
}
</script>

<style>

</style>
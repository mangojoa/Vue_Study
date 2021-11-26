<template>
  <div>
      <a id="custom-login-btn" @click="kakaoLogin()">
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222">
      </a>      
  </div>
</template>

<script>
export default {
methods: {
    kakaoLogin() {
        window.Kakao.Auth.login({
            /*
            KOE205 error => scope 값이 '동의항목 ID'와 일치하지 않으면 에러가 발생한다. 
            이를 일치시키는 작업을 해줘야하고 / 나아가 포함되지 않은 수집항목이 있으면 안된다. 
            */
            scope : 'profile_nickName, account_email',
            success: this.getKakaoAccount,
        });
    },
    kakaoLogout() {
        window.Kakao.Auth.logout((response) => {
            console.log(response);
        })
    },
    getKakaoAccount() {
        window.Kakao.API.request({
            url: '/v2/user/me',
            success : res => {
                const kakao_account = res.kakao_account;
                const nickname = kakao_account.profile.nickname;
                const email = kakao_account.email;
                console.log('nickname', nickname);
                console.log('email', email);

                // 로그인 처리 구현
                alert("로그인 성공!");
            },
            fail : error => {
                console.log(error)
            }
        })
    },
}
}
</script>

<style>

</style>
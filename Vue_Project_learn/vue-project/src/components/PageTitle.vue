<template>
  <h2>{{ title }}</h2>
</template>

<script>
/*
부모컴포넌트 => 자식컴포넌트로 데이터 전달하기 : props?

현재 부모 NestedComponent / 자식 PageTitle 인 상황에서 

부모의 <PageTitle /> 에서 title = "@" 라는 데이터를 전달하면 
자식의 props에서 부모에서 넘어온 데이터 "@"를 {{title}}에 바인딩하는 구조
*/
export default {
    props: {
        title: {
            type: String,
            default: "페이지 제목입니다."
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
      <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product,i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.product_price}}</td>
                    <td>{{product.product_category}}</td>
                    <td>{{product.product_delivery_price}}</td>
                </tr>
            </tbody>
      </table>
  </div> 
</template>

<script>
/*
mixin(api.js)를 사용한 중복코드 간소화

믹스인은 컴포넌트에서 일어나는 이벤트 훅을 그대로 이용할 수 있다는 큰 이점을 가지고 있습니다.
*/
import ApiMixin from './api.js';
export default {
    mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
    data() {
        return {
            productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://a07abb10-1c0c-4b76-ab2c-865537386cb9.mock.pstmn.io/list", "get");
        console.log(this.productList)
    }
}
</script>

<style>

</style>
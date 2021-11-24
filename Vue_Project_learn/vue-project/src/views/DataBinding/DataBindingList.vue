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
export default {
    data() {
        return {
            /*
            보통은 api로 부터 json 형태로 데이터를 가져오기 때문에 해당 부분에 있어 
            json 형태의 데이터를 가지고 v-for를 통해 바인딩을 진행
            */
            productList: []
        };
    },
    created() {
        this.getList(); // created 단계에서 
    },
    methods: {
        async getList() { // 해당 메소드를 실행한다.
            this.productList = await this.$api("https://a07abb10-1c0c-4b76-ab2c-865537386cb9.mock.pstmn.io/list", "get");
            console.log(this.productList)
        } 
    }
}
</script>

<style scoped>
    table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>
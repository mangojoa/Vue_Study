<template>
  <section>
      <!--
      v-for 문을 통해 가져온 데이터 수 만큼 표현하는 개념이다
      하지만 여기까지만 한다면 데이터를 추가하더라도 바로 갱신되지 않는 UX다.

      앞서 제작된 기능들의 완성도를 높일 수 있는 애니메이션 효과를 추가하는 작업이다.
      <transition-group> 태그로 묶어서 처리할 수 있다. additional <ul> 태그는 지운다.
      -->
      <transition-group name="list" tag="ul">
      <!--   삭제기능 구현을 위한 마크업 만들기 / 선택한 할 일을 뷰에서 인식하도록 만들기   -->
      <!--   이제 출력되는 인자값을 todoItems가 아닌 propsdata에 담는다.   -->
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <!-- i태그를 통해 할일 체크 버튼과 삭제버튼에 사용할 아이콘 및 휴지통 아이콘을 추가  -->
        <i class="checkBtn fas fa-check" aria-hidden="ture"></i>
          {{ todoItem }}
          <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </span>
      </li>
      </transition-group>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: ['propsdata'],
  // App.vue에 저장을 하기때문에 이제는 더이상 필요가 없는 부분이다.
//  // 로컬 스토리지 데이터를 뷰 테이터에 저장하기
//  // data(){
//  //   return {
//  //     todoItems:[]
//  //   }
  // },
  methods: {
    // text & index 값을 콘솔에 표시
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);
      // App.vue에서 이벤트를 전달받아 진행되므로 아래 부분은 주석처리한다
      // console.log(todoItem, index);
      // // 선택한 할 일을 로컬 스토리지와 뷰 데이터에서 삭제하기
      // localStorage.removeItem(todoItem);
      // this.todoItems.splice(index, 1);
    }
  },
  // 이 부분은 이제 App.vue로 이동한다.
  // // 로컬 스토리지 데이터를 뷰에 저장
  // created(){ // 라이프 사이클 훅에서 옮기는 방법
  //   if (localStorage.length>0){
  //     for (let i = 0; i < localStorage.length; i++){
  //       this.todoItems.push(localStorage.key(i)); // 값이 존재한다면 이를 todoItems()에 push(localStorage.key(i))
  //     }
  //   }
  // }
}
</script>

<style scoped>
  ul{
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li{
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active, .list-leave-active{
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
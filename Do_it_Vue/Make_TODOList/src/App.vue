<template>
  <div id="app">
    <!-- helloWould 는 빠지고 -->
    <TodoHeader></TodoHeader>
    <!--  TodaInputs 컴포넌트에는 할 일 추가 버튼을 클릭했을 때 App 컴포넌트로 이벤트를 전달할 수 있도록 v-on:  -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!--  그리고 선언한 todoItems 속성을 TodoList 컴포넌트에 props로 전달합니다. v-bind:  -->
    <!--  이제 성능개선을 해야한다. 각 할 일 아이템을 삭제하는 로직에도 이벤트 전달 방식을 적용 @removeTodo=  -->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// component를 불러오면 import는 당연히 따라와야 한다.
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',
  props: ['propsdata'],
  /*
  -- 기존의 문제점
  1. 할 일을 입력했을 때 할 일 목록에 바로 반영되지 않는 점
  2. 할 일을 모두 삭제했을 때 할 일 목록에 바로 반영되지 않는 점 이 존재한다.
  하지만 현재 화면을 4개의 영역으로 분리해 놓았기 때문에 한 영역의 처리 결과를 다른 영역에서 감지하지 못한다는 문제가 있다.

  -- 해결법
  이러한 이슈를 해결하기 위해서는 컴포넌트를 4개로 분리하지 않고
  한 컴포넌트 안에서 데이터 저장, 조회 삭제를 모두 처리하면 된다.

  -- How ??
  뷰 데이터 속성 todoItems와 로컬 스토리지의 데이터 조회, 추가, 삭제를 모두 App컴포넌트에서 처리한다.
  그리고 하위 컴포넌트들은 그 데이터를 표현하거나 데이터 조작에 대한 요청만 발생하는 형태로 구성
  */
  data() {
    return {
      todoItems: [] // 데이터 속성 todoItems를 선언한다.
    }
  },
  methods: { // 로컬 스토리지에 데이터를 추가하는 로직
    // todoInputs 에서 이벤트로 넘어오는 인자값을 받는 부분
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      // 넘어온 인자값을 저장한다.
      this.todoItems.push(todoItem);
    },
    // todoFooter 에서 이벤트로 넘어오는 작업을 수행하는 부분
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    // todoList 에서 이벤트로 넘어오는 작업을 수행하는 부분
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  // 로컬 스토리지 데이터를 뷰에 저장
  // 컴포넌트가 생성될 때 로컬 스토리지에 저장된 데이터를 모두 불러와 배열에 담아주던
  // created() Methods를 옮긴다. why?? 이제 App.vue에서 파일을 관리하기 때문이다.
  created(){ // 라이프 사이클 훅에서 옮기는 방법
    if (localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i)); // 값이 존재한다면 이를 todoItems()에 push(localStorage.key(i))
      }
    }
  },
  components: {
    // component 선언
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
/*
  최상의 컴포넌트에 CSS적용
*/
  body{
    text-align: center;
    background-color: #F6F6F8;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0.3)
  }
</style>

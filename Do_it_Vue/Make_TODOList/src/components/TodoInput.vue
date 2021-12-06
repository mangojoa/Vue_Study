<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do"
           v-on:keyup.enter="addTodo()">
    <!--  enter를 누르면 addTodo() 동작하게끔!  -->
    <span class = "addContainer" v-on:click = "addTodo">
    <!--   어썸 아이콘의 + 아이콘 추가   -->
      <i class = "addBtn fas fa-plus" aria-hidden="ture"></i>

      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Warning!</h3>
        <span slot="body"> Write! Anything!! </span>
        <span slot="footer" @click="showModal = false">
          <i class="closemodalBtn fas fa-times" aria-hidden="true">cancel</i>
        </span>
      </modal>
    </span>
  </div>
</template>

<script>
// Modal.vue 불러오기
import Modal from './common/Modal.vue'

export default {
  name: "TodoInput",
  props: ['propsdata'],
  data(){
    return{
      newTodoItem: '',
      showModal: false // Modal 동작을 위한 플래스 값
    }
  },
  methods: {
    addTodo(){
      // 추가하려는 내용이 없다면 이는 저장되는 로컬 스토이지에 저장되는 문제가 존재한다.
      if (this.newTodoItem !== ""){
        var value = this.newTodoItem && this.newTodoItem.trim();
        // addTodo 이벤트를 전달할 뗴 할 일 텍스트 값인 value 객체를 인자 값으로 전달합니다.
        this.$emit('addTodo',value)
        // 이제 App.vue로 전달할 예정이기에 로컬 스토리지에 저장하지 않는다.
        // localStorage.setItem(value, value);
        this.clearInput();
        // 입력받은 텍스트를 로컬 스토리지에 저장
        // setItem() API를 이용하여 저장 (setItem은 로컬 스토리지에 데이터를 추가하는 API)
        // localStorage.setItem(this.newTodoItem, this.newTodoItem);

        // 입력값을 console.log 로 띄우기
        // console.log(this.newTodoItem)
      } else { // 모달에 대한 동작 구현
        this.showModal = !this.showModal; // 텍스트 미입력시 모달 작동
      }
    },
    // 여기서 this는 APP.Vue를 가리키고 있다.
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline:none;
  }
  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size:0.9rem;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: white;
    vertical-align: middle;
  }


</style>
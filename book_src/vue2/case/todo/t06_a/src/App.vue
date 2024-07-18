<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter
          :todos="todos"
          @checkedAllTodo="checkedAllTodo"
          @clearTodos="clearTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(obj) {
      this.todos.unshift(obj);
      // this.todos = [obj, ...this.todos]
    },
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    checkedAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    clearTodos() {
      this.todos = this.todos.filter((todo) => todo.done != true);
    },
    updateTodo(id, value) {
      console.log('id', id, 'value:', value);
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.name = value;
      });
    }
  },
  mounted() {
    pubsub.subscribe('checkTodo', (_, id) => this.checkTodo(id))
    // pubsub.subscribe("checkTodo", (_, id) => this.checkTodo(id));
    pubsub.subscribe("deleteTodo", (_, id) => this.deleteTodo(id));
    pubsub.subscribe("updateTodo", (_, data) => this.updateTodo(data.id, data.value));
  },
  beforeDestroy() {
    pubsub.subscribe('checkTodo')
    // pubsub.subscribe("checkTodo")
    pubsub.subscribe("deleteTodo")
    pubsub.subscribe('updateTodo')
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {  
        console.log('进入watch, value:', value);
        console.log('进入watch, valuestr:', JSON.stringify(value));
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
   border: 1px solid rgb(128, 202, 231);
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
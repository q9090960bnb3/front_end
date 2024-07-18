<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.name"
        @keyup.enter="handleUpdate(todo, $event)"
        @blur="handleUpdate(todo, $event)"
        ref="inputName"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  mounted() {
    this.$set(this.todo, 'isEdit', false);
    // console.log("todo:", this.todo);
  },
  methods: {
    handleCheck(id) {
      pubsub.publish("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        console.log(id);
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      todo.isEdit = true
      // console.log('@@', todo.hasOwnProperty("isEdit"));
      // if (todo.hasOwnProperty("isEdit")) {
      //   console.log('@');
      //   todo.isEdit = true;
      // } else {
      //   this.$set(todo, 'isEdit', true);
      // }
      // this.$refs.inputName.focus()  // 执行完后才会重新渲染vue模板，所以没有效果
      this.$nextTick(()=>{  // 指定下一次渲染模板后执行focus
        this.$refs.inputName.focus()
      })
    },
    handleUpdate(todo, e) {
      console.log('e.target.value', e.target.value);
      console.log('e:', e);
      pubsub.publish('updateTodo', {id:todo.id, value:e.target.value})
      todo.isEdit = false
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover button {
  display: block;
}
</style>
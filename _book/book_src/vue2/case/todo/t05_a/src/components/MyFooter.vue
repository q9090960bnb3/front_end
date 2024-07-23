<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkedAll"/> -->
      <input type="checkbox" v-model="isAll2" />
    </label>
    <span>
      <span>已完成{{ doneTotals }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAllTodos">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    isAll() {
      return this.doneTotals === this.total && this.total > 0;
    },
    isAll2: {
      get() {
        return this.doneTotals === this.total && this.total > 0;
      },
      set(value) {
        // this.checkedAllTodo(value);
        this.$emit("checkedAllTodo", value);
      },
    },
    total() {
      return this.todos.length;
    },
    doneTotals() {
      return this.todos.reduce((pre, todo) => {
        return (pre += todo.done);
      }, 0);
    },
  },
  methods: {
    checkedAll(e) {
      // this.checkedAllTodo(e.target.checked);
      this.$emit("checkedAllTodo", e.target.checked);
    },
    clearAllTodos() {
      this.$emit("clearTodos");
      // this.clearTodos();
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
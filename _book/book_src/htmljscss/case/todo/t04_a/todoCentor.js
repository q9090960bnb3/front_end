const todoCentor = (function () {
  /**
   * @description: 获取初始todo
   * @returns {[{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }]}
   */
  function loadTodos() {
    return JSON.parse(localStorage.getItem("todos")) || []
  }

  /**
   * @description: 存储todos
   * @param {[{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }]} todos
   */
  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  /**
   * @description: 改变todos中todo值
   * @param {[{
  *  id: string;
  *  name: string;
  *  done: boolean;
  * }]} todos
  * @param {{
  *  id: string;
  *  name: string;
  *  done: boolean;
  * }} todos todo
  */
  function addTodo(todos, todo) {
    todos.push(todo)
  }

  /**
   * @description: 
   * @param {[{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }]} todos
   * @param {string} todoID
   * @param {boolean} done
   * @return {*}
   */
  function updateTodoDone(todos, todoID, done) {
    todos.forEach(elem => {
      if (elem.id === todoID) {
        elem.done = done
      }
    })
  }

  /**
   * @description: 
   * @param {[{
  *  id: string;
  *  name: string;
  *  done: boolean;
  * }]} todos
  * @param {string} todoID
  * @param {string} name
  * @return {*}
  */
 function updateTodoName(todos, todoID, name) {
   todos.forEach(elem => {
     if (elem.id === todoID) {
       elem.name = name
     }
   })
 }

  /**
   * @description: 更新所有todo 的 done 状态
   * @param {[{
  *  id: string;
  *  name: string;
  *  done: boolean;
  * }]} todos
  * @param {boolean} done
  * @return {*}
  */
  function updateTodosDone(todos, done) {
    todos.forEach(elem => {
      if (elem.done !== done) {
        elem.done = done
      }
    })
  }

  /**
   * @description: 删除指定todo id
    * @param {[{
  *  id: string;
  *  name: string;
  *  done: boolean;
  * }]} todos
   * @param {string} id
   */
  function removeTodo(todos, id) {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      // 使用 splice() 方法删除找到的对象
      todos.splice(index, 1);
    }

    return todos
  }

  return {
    addTodo,
    loadTodos,
    saveTodos,
    updateTodoDone,
    updateTodoName,
    updateTodosDone,
    removeTodo,
  }
})()
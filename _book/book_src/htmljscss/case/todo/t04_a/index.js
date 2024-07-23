const todos = todoCentor.loadTodos()

window.onload = function(){
  elementCenter.initTodos(todos)
  elementCenter.updateTodoInfos(todos)
}
// 改变todo的checked状态
eventCenter.subscribe('update-todo-checked', ({todoID, checked}) => {
  todoCentor.updateTodoDone(todos, todoID, checked)
  todoCentor.saveTodos(todos)
  elementCenter.updateTodoInfos(todos)
})

eventCenter.subscribe('update-todo-name', ({todoID, todoName}) => {
  todoCentor.updateTodoName(todos, todoID, todoName)
  todoCentor.saveTodos(todos)
  elementCenter.updateTodoInfos(todos)
})

// 改变所有todo的checked状态
eventCenter.subscribe('update-todos-checked', (checked) => {
  todoCentor.updateTodosDone(todos, checked)
  todoCentor.saveTodos(todos)
  elementCenter.updateTodoInfos(todos)
})

// 删除todo
eventCenter.subscribe('todo-delete', (todoID) => {
  todoCentor.removeTodo(todos, todoID)
  todoCentor.saveTodos(todos)
  elementCenter.updateTodoInfos(todos)
})

eventCenter.subscribe('todo-add', (todo) => {
  todoCentor.addTodo(todos, todo)
  todoCentor.saveTodos(todos)
  elementCenter.updateTodoInfos(todos)
})

eventCenter.subscribe('todo-edit', (todo) => {

})




// 控制 todo dom 元素
const elementCenter = (function () {

  const input = document.querySelector('.todo-header input')
  const list = document.querySelector('.todo-main')
  const allCheckBox = document.querySelector('.todo-footer input')
  const finishNumSpan = document.querySelector('#finish_num')
  const allNumSpan = document.querySelector('#all_num')

  // 按钮添加任务
  input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      const value = this.value.trim()
      if (!value) return

      const todo = {
        id: `${Date.now()}`,
        name: value,
        done: false
      }

      addTodo(todo)
      eventCenter.publish('todo-add', todo)

      this.value = ''
    }
  })

  allCheckBox.addEventListener('change', function (e) {
    console.log('e.target:', e.target)
    console.log('e.target:', e.target.checked) // todo 子项会造成联动，需提前保存其状态
    checked = e.target.checked
    eventCenter.publish('update-todos-checked', checked)
  })

  /**
   * @description: 
   * @param {[{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }]} todos
   * @return {*}
   */
  function updateTodoInfos(todos) {

    // 更新底部所有
    const finishNum = todos.filter(todo => todo.done).length
    finishNumSpan.innerHTML = finishNum
    allNumSpan.innerHTML = todos.length
    if (finishNum == todos.length) {
      allCheckBox.checked = true
    }else{
      allCheckBox.checked = false
    }

    // 更新单个checked
    todos.forEach(todo => {
      const id = `change-${todo.id}`
      document.getElementById(id).checked = todo.done
    })
  }

  /**
   * @description: 添加todo元素
   * @param {{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }} todo
   * @return {*}
   */
  function addTodo(todo) {
    const li = document.createElement('li')
    const checked = todo.done ? 'checked' : ''
    li.id = todo.id

    li.innerHTML = `
      <label>
        <input id="change-${todo.id}" onchange="handleTodoChecked(this)" type="checkbox" ${checked}/>
        <span id="span-${todo.id}">${todo.name}</span>
        <input id="inputedit-${todo.id}" type="text" value="${todo.name}" onkeyup="handleTodeFinishEdit(event, this)" style="display:none"/>
      </label>
      <button id="remove-${todo.id}" onclick="handleTodoDelete(this)" class="btn btn-danger">删除</button>
      <button id="edit-${todo.id}" onclick="handleTodoEdit(this)" class="btn btn-edit">编辑</button>
    `

    list.appendChild(li)
  }

  /**
   * @description: 
   * @param {[{
   *  id: string;
   *  name: string;
   *  done: boolean;
   * }]} todos
   * @return {*}
   */
  function initTodos(todos) {
    todos.forEach(todo => {
      addTodo(todo)
    })
  }

  /**
   * @description: 
   * @param {string} todoID
   */
  function removeTodo(todoID) {
    const li = document.getElementById(todoID)
    li.parentNode.removeChild(li)
  }

  return {
    updateTodoInfos,
    initTodos,
    removeTodo,
  }
})();

/**
   * @description: 处理todo的change事件
   * @param {HTMLElement} target
   */
function handleTodoChecked(target) {
  console.log('target:', target)
  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]
  const checked = target.checked

  eventCenter.publish('update-todo-checked', {
    todoID,
    checked
  })
}

/**
 * @description: 
 * @param {HTMLElement} target
 * @return {*}
 */
function handleTodoDelete(target) {
  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]

  elementCenter.removeTodo(todoID)
  eventCenter.publish('todo-delete', todoID)
}

/**
 * @description: 
 * @param {HTMLElement} target
 * @return {*}
 */
function handleTodoEdit(target) {
  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]

  target.style = 'display:none'
  const spanID = `span-${todoID}`
  document.getElementById(spanID).style = 'display:none'

  const inputEditID = `inputedit-${todoID}`
  document.getElementById(inputEditID).style = 'display:inline-block'
}

/**
 * @description: 
 * @param {KeyboardEvent} event
 * @param {HTMLElement} target
 * @return {*}
 */
function handleTodeFinishEdit(event, target) {
  if (event.key !== 'Enter') return

  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]
  const todoName = target.value

  const spanID = `span-${todoID}`
  document.getElementById(spanID).style = 'display:inline-block'
  document.getElementById(spanID).innerHTML = todoName

  target.style = 'display:none'
  const editID = `edit-${todoID}`
  document.getElementById(editID).style = ''

  eventCenter.publish('update-todo-name', {
    todoID,
    todoName
  })
}
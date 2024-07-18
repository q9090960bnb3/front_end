const input = document.querySelector('.todo-header input')
const list = document.querySelector('.todo-main')
const allCheckBox = document.querySelector('.todo-footer input')
const finishNumSpan = document.querySelector('#finish_num')
const allNumSpan = document.querySelector('#all_num')

const todos = JSON.parse(localStorage.getItem("todos")) || []

// 返回todo 已完成，和总共的数量
function updateTodoInfo() {
  let finishNum = 0
  console.log('todos:', todos)
  todos.forEach(todo => {
    if (todo.done) {
      finishNum++
    }
  })
  console.log('finishNum:', finishNum)
  finishNumSpan.innerHTML = finishNum
  allNumSpan.innerHTML = todos.length

  allCheckBox.checked = finishNum === todos.length

  localStorage.setItem("todos", JSON.stringify(todos))
}

window.onload = function () {
  todos.forEach(todo => addTodo(todo))
}

// 添加任务 
/*
  @param {Object} todo: {
    id: string;
    name: string;
    done: boolean;
}
*/
function addTodo(todo) {
  const li = document.createElement('li')
  const checked = todo.done ? 'checked' : ''
  const display = todo.done ? 'inline-block' : 'none'
  li.id = todo.id

  li.innerHTML = `
    <label>
      <input id="change-${todo.id}" onchange="handleTodoChange(this)" type="checkbox" ${checked}/>
      <span>${todo.name}</span>
    </label>
    <button id="remove-${todo.id}" onclick="handleTodoDelete(this)" class="btn btn-danger" style="display:${display}">删除</button>
  `

  list.appendChild(li)

  updateTodoInfo()

}

function removeTodo(id) {
  const li = document.getElementById(id)
  console.log('li:', li)
  li.parentNode.removeChild(li)

  const index = todos.findIndex(todo => todo.id === id);

  if (index !== -1) {
    // 使用 splice() 方法删除找到的对象
    todos.splice(index, 1);
  }

  updateTodoInfo()
}

function changeTodo(id, done) {
  console.log(`in changeTodo id:${id}, done:${done}`)
  const removeID = "remove-" + id
  const removeBotton = document.getElementById(removeID)
  if (done) {
    removeBotton.style = "display:inline-block"
  } else {
    removeBotton.style = "display:none"
  }
  const changeID = "change-" + id
  const changeCheckBox = document.getElementById(changeID)
  changeCheckBox.checked = done
  todos.forEach(todo => {
    if (todo.id === id) {
      todo.done = done
    }
  })
  updateTodoInfo()
}

// 按钮添加任务
input.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    const value = this.value.trim()
    if (!value) return

    todo = {
      id: `${Date.now()}`,
      name: value,
      done: false
    }

    todos.push(todo)

    addTodo(todo)
  
    this.value = ''
  }
})

allCheckBox.addEventListener('change', function (e) {
  console.log('e.target:', e.target)
  console.log('e.target:', e.target.checked) // todo 子项会造成联动，需提前保存其状态
  checked = e.target.checked
  todos.forEach(todo => {
    if (todo.done !== checked){
      changeTodo(todo.id, checked)
    }
  })
})


function handleTodoChange(target) {
  console.log('target:', target)
  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]
  const checked = target.checked
  changeTodo(todoID, checked)
}

function handleTodoDelete(target) {
  console.log('target:', target)
  console.log('target.parentNode:', target.parentNode)
  const todoIDs = target.id.split('-')
  const todoID = todoIDs[todoIDs.length - 1]
  removeTodo(todoID)
}
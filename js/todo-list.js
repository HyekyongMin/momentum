const todoFormEl = document.querySelector('#todo-form')
const todoInputEl = document.querySelector('#todo-form input')
const todoListEl = document.querySelector('#todo-list')

const TODOS_KEY = "Todos"

let toDos = []

const getTodos = localStorage.getItem(TODOS_KEY)

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

todoFormEl.onsubmit = (event) => {
  event.preventDefault()
  const newTodo = todoInputEl.value
  todoInputEl.value = ""
  const newTodoObject = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObject)
  saveTodos()
  paintTodo(newTodoObject)
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
  saveTodos()
}

function paintTodo(todos) {
  const li = document.createElement("li")
  li.id = todos.id
  const span = document.createElement("span")
  const deleteBtn = document.createElement("button")
  span.innerText = `- ${todos.text}`
  deleteBtn.innerText = "X"

  deleteBtn.addEventListener("click", deleteTodo)

  li.appendChild(span)
  li.appendChild(deleteBtn)
  todoListEl.appendChild(li)
}

if(getTodos !== null) {
  const parseToDos = JSON.parse(getTodos)
  toDos = [...parseToDos]
  parseToDos.forEach(paintTodo)
}
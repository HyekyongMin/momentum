const todoFormEl = document.querySelector('#todo-form')
const todoInputEl = document.querySelector('#todo-form input')
const todoListEl = document.querySelector('#todo-list')
const TODOS_KEY = "Todos"

let toDos = []

const saveTodos = localStorage.getItem(TODOS_KEY)

todoFormEl.onsubmit = (event) => {
  event.preventDefault()
  const newTodo = todoInputEl.value
  todoInputEl.value = ""
  const newTodoObject = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObject)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  paintTodo(newTodoObject)
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter((todo) => todo.id != parseInt(li.id))
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function paintTodo(todos) {
  const li = document.createElement("li")
  li.id = todos.id
  const span = document.createElement("span")
  const deleteBtn = document.createElement("button")
  li.appendChild(span)
  todoListEl.appendChild(li)
  li.appendChild(deleteBtn)
  span.innerText = `- ${todos.text}`
  deleteBtn.innerText = "X"
  deleteBtn.addEventListener("click", deleteTodo)
}

if(saveTodos) {
  const parseToDos = JSON.parse(saveTodos)
  toDos.push(parseToDos)
  parseToDos.forEach(paintTodo)
}
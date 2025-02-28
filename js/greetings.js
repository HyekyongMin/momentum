const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const greetings = document.querySelector('#greetings')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'userName'

const storageUserName = localStorage.getItem(USERNAME_KEY)

function paintHello(name) {
  greetings.classList.remove(HIDDEN_CLASSNAME)
  greetings.innerText = `Hello ${name}!`
}

if (storageUserName !== null) {
  paintHello(storageUserName)
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.onsubmit = (event) => {
    event.preventDefault()
    const userNameForm = loginInput.value
    localStorage.setItem(USERNAME_KEY, userNameForm)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintHello(userNameForm)
  }
}


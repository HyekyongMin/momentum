const date = document.querySelector("#date")
const clock = document.querySelector("#clock")

const today = new Date()
const currentDate = today.toLocaleDateString("ko-KR", {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
})
date.innerText = currentDate

function intervalTime() {
    const today = new Date()
    const hours = String(today.getHours()).padStart(2, 0)
    const minutes = String(today.getMinutes()).padStart(2, 0)
    const seconds = String(today.getSeconds()).padStart(2, 0) 
    const timeString = `${hours}:${minutes}:${seconds}`
    clock.innerText = timeString
}
intervalTime()
setInterval(intervalTime, 1000)




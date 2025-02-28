function onGeoOk(position) {
  const lat = position.coords.latitude
  const lng = position.coords.longitude
  const apiKey = "18945624eaec4d77f53226fdeef65ab7"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  fetch(url).then((response) => response.json()).then(data => {
    console.log(data)
    const weatherEl = document.querySelector("#weather span:first-child")
    const degreeEl = document.querySelector("#weather span:last-child")
    const deg = Math.floor(data.main.temp)
    const weather = data.weather[0].main
    console.log(weather)
    const icon = document.createElement("i")
    weatherEl.appendChild(icon)
    if(weather === "Clouds") {
      icon.classList.add("fa-solid", "fa-cloud")
    } else if (weather === "Sun") {
      icon.classList.add("fa-solid", "fa-sun")
    } else if (weather === "Rain") {
      icon.classList.add("fa-solid", "fa-raindrops")
    } else if (weather === "Snow") {
      icon.classList.add("fa-solid", "fa-snowflake")
    }
    degreeEl.innerText = `${deg} 도`
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
const backgroundImg = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
]

const imaage = backgroundImg[Math.floor(Math.random() * backgroundImg.length)]

document.body.style.background = `url(./images/${imaage}) no-repeat fixed`
document.body.style.backgroundSize = "cover"

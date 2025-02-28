const quotes = [
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료"
  },
  {
    quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 한다.",
    author: "찰리 채플린"
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드"
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다.",
    author: "파울로 코엘료"
  },
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇"
  },
  {
    quote: "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 흔히 우리는 닫혀진 문을 오랫동안 보기 때문에 우리를 위해 열려 있는 문을 보지 못한다.",
    author: "헬렌 켈러"
  },
  {
    quote: "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭"
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "파울로 코엘료"
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
    author: "헨렌켈러"
  },
  {
    quote: "한 번 실패와 영원한 실패를 혼동하지 마라.",
    author: "F.스콧 핏제랄드"
  },
  {
    quote: "인간의 삶 전체는 단지 한 순간에 불과하다 . 인생을 즐기자.",
    author: "플루타르코스"
  },
  {
    quote: "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다.",
    author: "오손 웰스"
  }
]

const quoteEl = document.querySelector('#quote span:first-child')
const authorEl = document.querySelector('#quote span:last-child')

function getQuote() {
  const quoteGrop = quotes[Math.floor(Math.random() * quotes.length)]
  quoteEl.innerText = quoteGrop.quote 
  authorEl.innerText = `- ${quoteGrop.author} -`


}
getQuote()
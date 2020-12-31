const allHands = document.querySelectorAll('.hand')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

function currentHour() {
  let getHour = new Date().getHours()
  getHour = getHour % 12
  getHour = getHour ? getHour : 12
  hour.style.transform = `rotate(${180 + getHour * 30}deg) translateY(75px)`
}

function currentMinute() {
  let getMinute = new Date().getMinutes()
  minute.style.transform = `rotate(${180 + getMinute * 6}deg) translateY(100px)`
}

function currentSecond() {
  let getSecond = new Date().getSeconds()
  if (180 + getSecond * 6 === 180) {
    allHands.forEach((hand) => (hand.style.transition = 'none'))
  } else {
    allHands.forEach((hand) => (hand.style.transition = ''))
  }
  second.style.transform = `rotate(${180 + getSecond * 6}deg) translateY(100px)`
}

function currentTime() {
  currentSecond()
  currentMinute()
  currentHour()
}

setInterval(currentTime, 100)

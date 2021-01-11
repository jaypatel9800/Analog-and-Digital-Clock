//for analog clock
setInterval(setClock, 1000)

let hourHand = document.querySelector('[hrs]');
let minuteHand = document.querySelector('[min]');
let secondHand = document.querySelector('[sec]');

function setClock() {
  let currentDate = new Date();
  let secondsRatio = currentDate.getSeconds() / 60;
  let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;


  function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

//for digital clock
function digiClock() {
  let hours = document.getElementById('digihour');
  let minutes = document.getElementById('digiminute');
  let seconds = document.getElementById('digisecond');
  let ampm = document.getElementById('ampm');

  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let am = 'AM';
  if (hr >= 12) {
    if (hr <= 24) {
      am = 'PM'
      if(hr>=13){
        hr = hr - 12;
      }
    }
  }
  hr = (hr < 10) ? "0" + hr : hr;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;


  hours.innerHTML = hr;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  ampm.innerHTML = am;
}
let x = setInterval(digiClock, 1000);
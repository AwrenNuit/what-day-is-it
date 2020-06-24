const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = '';

function getDayOfWeek() {
  const date = new Date().getDay();
  return today = days[date];
}

function setPointerToToday() {
  for(let day of document.getElementsByTagName('p')) {
    if(day.innerHTML === today.substr(0, 3)) {
      day.classList.add('active');
    }
  }
}

getDayOfWeek();
setPointerToToday();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = '';

function getDayOfWeek() {
  const date = new Date().getDay();
  return today = days[date];
}

getDayOfWeek();

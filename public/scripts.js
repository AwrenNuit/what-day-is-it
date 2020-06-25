const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let today = "";

function getDayOfWeek() {
  const date = new Date().getDay();
  return (today = days[date]);
}

function setPointerToToday() {
  for (let day of document.getElementsByTagName("p")) {
    if (day.innerHTML === today) {
      day.classList.add("active");
    }
  }
}

getDayOfWeek();
setPointerToToday();

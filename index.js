
function updateClock(){
const clockNow = new Date();
var hours = clockNow.getHours();
var maridian = hours >= 12? "PM":"AM";
hours = hours % 12 || 12; //to convert 24 clock to 12 clock
hours = hours.toString().padStart(2,0);
var minutes = clockNow.getMinutes().toString().padStart(2,0);
var seconds = clockNow.getSeconds().toString().padStart(2,0);
var timeString = `${hours}:${minutes}:${seconds} ${maridian}` ;
document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);


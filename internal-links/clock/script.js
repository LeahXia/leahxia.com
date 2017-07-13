const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");





function runTheClock(){
  var date = new Date();

  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();


  if (sec <10){
    sec = "0"+ sec;
  }

  if (min <10){
    min = "0"+ min;
  }

  document.querySelector(".textbox p").innerHTML = hr + " : " + min + " : " + sec;

  // if (hr > 12){
  //   hr = hr - 12;
  // }

  var hrDeg = 360/12*hr + 360/12/60*min;
  var minDeg = 360/60*min + 360/60/60*sec;
  var secDeg = 360/60*sec;

  HOURHAND.style.transform = "rotate(" + hrDeg + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minDeg + "deg)";
  SECONDHAND.style.transform = "rotate(" + secDeg + "deg)";

}

var interval = setInterval(runTheClock, 1000);

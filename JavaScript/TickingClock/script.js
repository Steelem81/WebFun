function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    secondsDegrees = ((time/60)*360) + 90
    // console.log(secondsDegrees);
    seconds.style.transform =`rotate(${secondsDegrees}deg)`
    minutesDegrees = (((time/60)%60) *360) + 90
    document.querySelector("#minutes").style.transform = `rotate(${minutesDegrees}deg)`
    console.log(minutesDegrees)
    
}, 1000);
  
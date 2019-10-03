function timeIncrement(time, increment){
  let timeSplit = time.split(':');
  let hour = parseInt(timeSplit[0], 10);
  let minutes = parseInt(timeSplit[1], 10);

  let minutesAdded = minutes + increment
  if(minutesAdded>60){
      if (hour + 1 >= 24 ){
        hour = 0;
      } else {
        hour++;
      }
    minutes = minutesAdded%60;
  } else {
    minutes = JSON.stringify(minutesAdded%60);
    if (minutes == 0){
    minutes = "00";
    }
  }
  let finalTime = JSON.stringify(hour) + ":" + minutes;

  return finalTime
}

console.log(timeIncrement("23:15", 45))

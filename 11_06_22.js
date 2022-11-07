function formatDuration (seconds) {
    // Complete this function
  //   first declare values for time units in seconds
  //   then start a while loop for while seconds > 60
  //   in the loop, check from biggest to smallest finding the largest amount of modulus divs possible for the largest unit, moving to next one as each fails down to minute
  //   after finding an applicable measure, do the division for the count of that measure and subtract that number from our total seconds
  //   construct an object from these counts as we loop
  //   after loop ad remaining value to seconds in the object
  //   loop over the object checking for value and constructing the return string
  //   return the string 
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }
  // will be given an int of seconds
  // outut should be the amount of time in a reaadable format. i,e 1 year 2 days 3 hours 4mins 5 seconds
  console.log(formatDuration(3600),'1 hour')
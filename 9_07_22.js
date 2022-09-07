function StringChallenge(str) { 
    let arr = str.split('-').map((item)=>{
      item = item.split('')
      if(item[item.length-2] ==='a'){
        let old = parseInt(item[0] + item[1])
        let newTime = old - 12
        item.splice(0,2)
        item.splice(item.length-2,2)
        item.unshift(String(newTime))
      }
      else if( item[item.length-2] ==='p' ){
        item.splice(item.length-2,2)
      }
      item = item.join('')
      return item
    })
    let time1 = arr[0]
    let time2 = arr[1]
    console.log(time2)
  
    let hour1 = parseInt(time1.split('').splice(0,2).join(''))
    let hour2 = parseInt(time2.split('').splice(0,2).join(''))
    let hourDiff = Math.abs(hour1 - hour2)
    let min1 = parseInt(time1.split('').splice(1,2).join(''))
    let min2 = parseInt(time2.split('').splice(1,2).join('')) || 0
    console.log(hour1,min1,hour2,min2)
    let diff = (hourDiff * 60) + ( Math.abs(min1 - min2))
    console.log(min1 - min2)
    // code goes here  
    return diff 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));
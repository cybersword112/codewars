function warnTheSheep(queue) {
  if(queue[queue.length -1] =="wolf"){
    return "Pls go away and stop eating my sheep"
  }else{
   queue.reverse()
   let wolf =  queue.indexOf("wolf")
   let str = `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
   return str
  }
}
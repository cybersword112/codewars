function betterThanAverage(classPoints, yourPoints) {
  let average = 0
  classPoints.push(yourPoints)
  for (let i = 0; i < classPoints.length; i++){
     average += classPoints[i]
  }
  average = (average / classPoints.length)
  
  if(yourPoints>= average){
    return true
  }else{
    return false
  }
}
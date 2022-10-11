function numberOfPairs(gloves)
{
//   declare a new map
//   loop over the array
//   check if the color is in the map
//   if yes, increment,
//   if no, add
//   declare a new pair var
//   loop over vals in map, if val is even, increment pair by the result of division
//   return pair
  let map = new Map()
  for(let i =0; i< gloves.length; i ++){
    if(map.has(gloves[i])){
      map.set(gloves[i],map.get(gloves[i]) + 1)
    }else{
      map.set(gloves[i],1)
    }
  }
  let pairs = 0
  map.forEach((amount,color)=>{
    console.log(amount)
   if(amount % 2 === 0){
     pairs += amount/2
   }else if (amount > 2){
     pairs += (amount -1) / 2
   }
    
  })
  
  return pairs
  //My hands are freezing
}
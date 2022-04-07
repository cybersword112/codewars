function evaporator(content, evap_per_day, threshold){ 
  let count = 0
  let limit = content * (threshold /100)
  while(content > limit){
    content -= (content * (evap_per_day/100))
    count+=1
  }
  return count;
}
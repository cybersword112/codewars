function findShort(s){
  let list = s.split(" ")
  let min = list[0].length
  for (let word in list){
    if (list[word].length<min){
       min = list[word].length
    }
  }
  return min
}
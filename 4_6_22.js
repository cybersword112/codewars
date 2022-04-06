function findMultiples(integer, limit) {
  //your code here
  let list= [integer]
  let count = 2
  while (list[list.length-1] <= limit-integer){
      list.push((integer*count))
      count+=1
    }
  return list
}
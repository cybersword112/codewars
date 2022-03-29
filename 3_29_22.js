function repeater(string, n){
  //Your code goes here.
  let str = string
  for(let i = 1; i < n; i++){
    str += string
  }
  return str
}
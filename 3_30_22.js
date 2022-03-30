function wordsToMarks(string){
  //your code here
  let a = "abcdefghijklmnopqrstuvwxyz"
  let sum = 0;
  for(let i = 0; i < string.length; i++){
    let letter = string[i]
    let num = a.indexOf(letter)
    sum += num +1
  }
  return sum
}
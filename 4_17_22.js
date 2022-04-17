function duplicateEncode(word){
  word = (word.toLowerCase()).split("")
  return (word.map(letter=>{ letter.toLowerCase();if(word.indexOf(letter) === word.lastIndexOf(letter)){return "(" }else{ return ")" }})).join("")
}
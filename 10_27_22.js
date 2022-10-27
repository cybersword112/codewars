function duplicateEncode(word){
    // ...
//   split the word, map over it
//   in the map check if indexOf === lastIndexOf, if so, replace with (
//   else replace with )
  return word.toLowerCase().split('').map((l,i,a)=>{
    if(a.indexOf(l) === a.lastIndexOf(l)){
      return '('
    }else{
      return ')'
    }
  }).join('')
}

// input will be a word/string
// output will be the word but encoded to a combination of ( and )

console.log(duplicateEncode('sharkWeek'),"(((()()))")
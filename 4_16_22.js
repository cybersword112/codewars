function isPangram(string){
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  string = string.toLowerCase()
  console.log(string)
  string = string.split("")
  console.log(string)
  let result = true
  for(let letter in alphabet){
    console.log(alphabet[letter])
    if (string.indexOf(alphabet[letter]) === -1){
      result = false
    }
  }
  return result
//   alphabet.forEach(item=>{ 
//     if(string.indexOf(item) == -1){
//       return false
//     }else{
//       return true
//     }
//   })
}
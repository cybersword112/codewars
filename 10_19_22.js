function findMissingLetter(array)
{
//   loop over the array check the difference of char code at i and i -1 , if the difference is greater than 1, return the char with the missing code value
  for (let i = 1 ; i < array.length; i++){
    if(array[i].charCodeAt(0) - array[i-1].charCodeAt(0) > 1 ){
      let letter = String.fromCharCode(array[i].charCodeAt(0) - 1)
      console.log(letter)
      return letter
    }
  }
}
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"]
  for (let i = 0; i<str.length;i++){
    let letter = str[i]
    for (let j=0; j< vowels.length; j++){
      if (letter == vowels[j]){
        vowelsCount += 1
      }
    }
  }
  // enter your majic here
  
  return vowelsCount;
}
function isIsogram(str){
    let res = true;
    str = str.toLowerCase()
  for (let i = 0 ; i< str.length; i++){
    if (str.lastIndexOf(str[i]) !== i ){
      res = false
    }
  }
    return res
  }
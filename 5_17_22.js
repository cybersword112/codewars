function solution(string) {
    string = string.split("")
    for(let i = 0; i< string.length; i++){
      if(string[i] === string[i].toUpperCase()){
        string.splice(i,0," ")
        i++
      }
    }
    string = string.join("")
    return string
  }
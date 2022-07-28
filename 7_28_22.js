function solution(value){
    if(String(value).length < 5){
      value = String(value)
      while(value.length < 5){
        value = "0" + value
      }
    }
    return `Value is ${value}`
  }
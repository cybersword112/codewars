function solution(str){
  //   let newstrarr = []
    let newstr = ""
    for (let i = str.length-1 ; i >= 0; i --){
      let letter = str[i]
      newstr += letter
    }
    return newstr
  }
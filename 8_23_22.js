function solve(s) {
    let b = '[backspace]'
    let bIndex = s.indexOf(`${b}`)
    let delNum = 1
    let starIndex = bIndex + 11
    let starIndexChar = s.charAt(starIndex)
    if(s.length > starIndex + 1){
      if(s.charAt(starIndex) === '*'){
        if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
          delNum = +s.slice(bIndex + 12, bIndex + 14)
        }else{
        delNum = +s.charAt(bIndex + 12)
        }
      }
    }
  
    if(!s.includes(`${b}`)){
      return s
    }
    while(s.includes(`${b}`)){
      if(bIndex >= delNum){
        if(s.charAt(bIndex+11) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            s = s.replace(s.split('').splice(bIndex - delNum, delNum + 14).join(''), '')
          }else{
            s = s.replace(s.split('').splice(bIndex - delNum, delNum + 13).join(''), '')
          }
          
        }else{
          s = s.replace(s.split('').splice(bIndex - delNum, delNum + 11).join(''), '')
        }
        
      }else{
        if(s.charAt(bIndex+11) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            s = s.slice(bIndex + 14)
          }else{
            s = s.slice(bIndex + 13)
          }
        }else{
          s = s.slice(bIndex + 11)
        }
      }
      
      bIndex = s.indexOf(`${b}`)
      delNum = 1
      starIndex = bIndex + 11
      starIndexChar = s.charAt(starIndex)
      if(s.length > starIndex + 1){
        if(s.charAt(starIndex) === '*'){
          if(+s.charAt(bIndex + 13) === +s.charAt(bIndex + 13) && s.charAt(bIndex + 13) !== ' '){
            delNum = +s.slice(bIndex + 12, bIndex + 14)
          }else{
          delNum = +s.charAt(bIndex + 12)
          }
        }
      }
    } 
    return s
  }
  
  // input will be a string containing letters and spaces along with the backspace function
  // output should be the original string with any chars before a backspace function removed
  
  console.log(solve('help[backspace]'),'hel')
  console.log(solve('help[backspace]*2'),'he')
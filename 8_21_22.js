function alphabetPosition(text) {
    //   split the text to an array, map over the array
    //   if the current item is an alphanumeric character, replace it with its character code
    //   join and return the split
      text = text.split('').map(item=>{
        if(item.charCodeAt(0) <= 'z'.charCodeAt(0) && item.charCodeAt(0) >= 'a'.charCodeAt(0)){
          return item = item.charCodeAt(0)-96 + ' '
        }else if(item.charCodeAt(0) <= 'Z'.charCodeAt(0) && item.charCodeAt(0) >= 'A'.charCodeAt(0)){
          return item = item.charCodeAt(0)-64 + ' '
        }else if(item === " "){
          return item = ''
        }else{
          return ""
        }
      }).join('').trim()
      return text
    }
    
    // will be passed in a string of chars
    // return same string whith chars replaced with char codes
    
    console.log(alphabetPosition('a*'),'1*')
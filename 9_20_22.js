function toCamelCase(str){
    // check if the seperator is _ or - 
    //   seperate by the seperator into array
    // loop over the array and for every word after the first, capitalize the first letter, leave the first the same
    //   join the array by nothing ''
      
      let seperator;
      if(str.includes('-')){
        seperator = '-'
      }else if (str.includes('_')){
        seperator = '_'
      }
      str = str.split(seperator)
      str = str.map((word,index)=>{
        if(index !== 0){
          word = word.split('')
          let letter = word[0]
          word.splice(0,1,letter.toUpperCase())
          word = word.join('')
        }
        return word
      }).join('')
      return str
    }
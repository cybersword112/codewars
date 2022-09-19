function order(words){
    // split words into array by space
    // create an empty array for result with length of words array
    //   loop over the array
    //   in the loop, loop over the word
    //   check for number by character code
    //   if number, splice the word into the result array
      
      words = words.split(' ')
      let resArr = new Array(words.length)
      words.forEach((group,index)=>{
        for(let i = 0; i < group.length; i++){
          if(group[i].charCodeAt(0) >= 49 && group[i].charCodeAt(0) <= 57 ){
            resArr.splice(Number(group[i]),1,group)
          } 
        }
      })
      return resArr.join(' ').trim()
    }
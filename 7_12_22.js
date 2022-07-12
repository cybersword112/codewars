function pigIt(str){
    //  convert sentence to array of words
      let arr = str.split(' ')
    //   make sure word is not punctuation
    //   map over array of words,split() the word 
      arr = arr.map((word)=>{
        word = word.split('')
        if(!word.includes('!') && !word.includes('.') && !word.includes(',') && !word.includes('?')){
         let fLet =  word.shift()
    //  take word[0] and push() it to the word again
         word.push(fLet + 'ay')
    //   return the new string 
          return word.join('')
        }
        else {
          return word.join('')
        }
      })
      return arr.join(' ')
    //   join() and return the list
    }
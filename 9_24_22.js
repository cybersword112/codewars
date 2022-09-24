var encryptThis = function(text) {
    // split text into array with ' '
    //   map over the array and for each word do the following:
      // replace first letter with charcode
    //   declare a temp var for letter switch, set equal to second letter [1]
    //   replace the second letter with the last letter
    //   replace the last letter with the temp letter
      text = text.split(' ')
      text = text.map((word,index)=>{
        word = word.split('')
        let first = word.shift()
        word.unshift(first.charCodeAt(0))
        if(word.length == 1){
          return word
        }
        let tempLast = word.pop()
        let temp2 = word.splice(1,1,tempLast)
        word.push(temp2)
        return word.join('')
      })
      return text.join(' ')
    }
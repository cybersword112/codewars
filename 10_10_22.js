function decipherThis(str) {
    let arr = str.split(' ')
    let res =  arr.map((word,index)=>{
      console.log(word)
      let code = parseInt(word)
      let letter = String.fromCharCode(code)
      let codeLength = String(code).length
      word = word.split('')
      word.splice(0,codeLength ,letter)
      let lastLetter = word.pop()
      word.push(word.splice(1,1,lastLetter))
      word = word.join('')
      console.log(word)
      return word
      }).join(' ')
    console.log(res)
    return res
    }; 
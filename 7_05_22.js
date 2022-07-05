function firstNonRepeatingLetter(s) {
    let b = s.split('').map(item=>{return item.toLowerCase()})
    console.log(b)
    console.log(s)
    let repeats = []
    for(let i = 0;i<b.length; i++){
      if(b.lastIndexOf(b[i]) != i){
        repeats.push(b[i])
      }else{
        if(b.lastIndexOf(b[i]) == i && repeats.indexOf(b[i]) == -1 ){
          return s[i]
        }
      }
    }
    return ''
  }
function toWeirdCase(string){
    //split string on spaces to get word
    let trans = string.split(' ')
  //   for each word map over including index
    trans = trans.map(item=>{
      return item.split('').map((char,index)=>{
  //   ternary operator on index and return char to lower or upper based on index
       return  index === 0 || index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      }).join('')
    })
  //   return and join array
    return trans.join(' ')
  }
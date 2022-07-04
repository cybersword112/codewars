function spinWords(string){
    return string.split(' ').map(item=>{
      if(item.length >= 5){return item.split('').reverse().join('')}
      else{return item}
    }).join(' ')
  }
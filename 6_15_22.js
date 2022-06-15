function high(x){
    let result;
  let max = 0
  x= x.split(' ')
    x.forEach(item=>{
     let word = item.split('')
     word = word.map((letter,ind,arr)=> arr[ind] = letter.charCodeAt(0)-96)
      console.log(word)
      word = word.reduce((acc,curr)=>acc + curr,0)
      if(word > max){
        max = word
        result = item
      }
    })
    return result
  }
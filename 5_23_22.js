function sumDigPow(a, b) {
    let res = []
    for(let i = a; i <= b; i++){
      let numbers = String(i).split("")
      numbers = numbers.reduce((acc,curr,index)=> acc + (Number(curr) ** (index+1)),0 )
      if(numbers === i){
        res.push(i)
      }
    }
    return res
  }
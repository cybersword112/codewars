function stockList(listOfArt, listOfCat){
    // ... 
    if(!listOfArt.length || !listOfCat.length){
      return ''
    }
    let res =new Map()
    for(let i = 0; i<listOfArt.length; i++){
      let stock = listOfArt[i].split(' ')
      let code = stock[0]
      let quant = stock[1]
      if(listOfCat.includes(code[0])){
        if(res.has(code[0])){
          res.set(code[0],res.get(code[0])+ parseInt(quant))
          console.log(parseInt(quant))
        }else{
          console.log(parseInt(quant))
          res.set(code[0], parseInt(quant))
        }
      }
    }
    let ret =''
    for(let i = 0; i<listOfCat.length; i++){
      if(i==0){
        ret = ret +`(${listOfCat[i]} : ${res.get(listOfCat[i]) || 0}) `
      }else{
        ret = ret +`- (${listOfCat[i]} : ${res.get(listOfCat[i]) ||0}) `
      }
    }
    ret = ret.trim()
    return ret
  }
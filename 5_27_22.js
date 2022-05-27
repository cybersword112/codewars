var countSheep = function (num){
    let str  = ""
    for (let i = 1 ; i <= num; i++){
      let sheep = `${i} sheep...`
      str = str + sheep
    }
    return str
  }
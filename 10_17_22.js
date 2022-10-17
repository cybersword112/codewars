function prefill(n, v) {
    if(parseInt(n) == 0){
      return []
    }else if(typeof(n) !== 'number' || parseInt(n) != Number(n) || n<0){
      throw new TypeError(`${n} is invalid`)
    }
    if(!v){
      return new Array(n).fill(undefined)
    }
    console.log(v)
    return new Array(n).fill(v)
  }
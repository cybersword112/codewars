function digPow(n, p){
    let digs = String(n).split("").map(item=>item = Number(item))
    let mults = []
    for(let i = 0 ; i<digs.length;i++){
      mults.push(digs[i]**p)
      p++
    }
    let res = mults.reduce((acc,curr)=> acc + curr,0)
    if(res % n == 0){
      return res/n
    }else{
      return -1
    }
  }
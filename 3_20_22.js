function descendingOrder(n){
  let num = n.toString()
  let newnum = []
  let strnum = ""
  if (n > 1){
    for (let i = 0; i < num.length;i++){
      newnum.push(num[i])
    }
    newnum = newnum.sort((a,b)=>b-a)
    for (let i = 0; i< newnum.length; i++){
      strnum += newnum[i]
    }
    return parseInt(strnum)
  }else{
    return n
  }

}
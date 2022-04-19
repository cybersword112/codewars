function mxdiflg(a1, a2) {
  if (a1.length >0 && a2.length >0){
    let na1 = a1.map(thing=>thing.length)
    let na2 = a2.map(thing=>thing.length)
    na1.sort((a,b)=>b-a)
    na2.sort((a,b)=>b-a)
    console.log(na1,na2)
    return Math.max(Math.abs((na1[na1.length-1])- (na2[0])),Math.abs((na1[0])- (na2[na2.length-1]))) 
  }else{
    return -1
  }
    // your code
}
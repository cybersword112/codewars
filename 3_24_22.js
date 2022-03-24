const flip=(d, a)=>{
  //TODO
  if(d=='R'){
    a.sort((a,b)=> a-b)
    return a
  }else if (d=='L'){
    return a.sort((a,b)=>b-a)
  }
}
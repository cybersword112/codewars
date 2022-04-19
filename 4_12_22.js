function findNb(m) {
    // your code
  let totalVolume = 0;
  let n =1
  while(totalVolume < m){
    totalVolume += n**3    
    n +=1
  }
  if(totalVolume == m){
    return n-1
  }else{
    return (-1);
  }
}
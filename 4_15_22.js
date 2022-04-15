function tribonacci(signature,n){
  //your code here
  if (n!=0 && n!= 1){
    for (let i = 2; i< n-1; i++){
      signature.push((signature[i-2]+signature[i-1]+signature[i]))
    }
    return signature
  }else if(n == 1){
    return [signature[0]]
  }else{
    return []
  }
}
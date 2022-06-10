function findOdd(A) {
    A = A.map(item=>Number(item)).sort((a,b)=>a-b)
    let count = 1;
    for(let i = 0; i< A.length; i++){
      let num = A[i]
      if(num == A[i+1]){
        count++
      }else if(count % 2 != 0 ){
          console.log(num)
          return num
      }else{
        count = 1
      }
      
    }
  
  }
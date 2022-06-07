function findUniq(arr) {
    let base;
  for(let i = 0; i<= 2;i++){
    if (arr[i] == arr[i+1]){
      base = arr[i]
    } 
  }
    arr = arr.filter(item=> item != base).map(item=>Number(item))
    return arr.reduce((curr,acc)=>acc+curr,0)
  }
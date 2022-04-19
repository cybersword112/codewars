const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let sum = 0
  if (begin>end){
    return 0
  }else{
    for(let i = begin; i <= end; i+=step){
      sum +=i
    }
    return sum
  }
};
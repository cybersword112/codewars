function narcissistic(value) {
    let nums = String(value).split('').map(item=>item = Number(item))
    nums =nums.reduce((acc,curr)=>acc + (curr**nums.length),0)
      if(nums == value){
        return true
      }else{
        return false
      }
    }
function digitsProduct(product) {
    let nums;
    console.log(product)
      for(let i =10;i<=10000;i++){
        nums = String(i).split("").map(item=>item = Number(item))
        nums = nums.reduce((acc,curr)=>acc * curr)
        if (nums === product){
          nums = i
          break
        }
      }
      console.log(nums)
      if (nums == 0){
        return -1 
      }
      return nums
    }
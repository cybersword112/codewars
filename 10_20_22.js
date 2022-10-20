function findEvenIndex(arr){
    //   loop through the array
    //   at each iteration, run reduce on each side of the array
    //  if the vals are equal return i
      
      for(let i = 0; i<arr.length; i++){
        let left = i
        let right = i + 1
        
        let leftArr = arr.slice(0,left)
        let rightArr = arr.slice(right,arr.length)
        
        let leftVal = leftArr.reduce((acc,curr)=>acc+curr,0)
        let rightVal = rightArr.reduce((acc,curr)=>acc + curr,0)
    
        if(leftVal === []){
          leftVal = 0
        }
        if(rightVal === []){
          rightVal = 0
        }
        if (leftVal == rightVal){
          return i
        }
      }
      return -1
    }
    
    // splice(i,arr.length-(i+1))
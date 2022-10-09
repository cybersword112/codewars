function getLengthOfMissingArray(arrayOfArrays) {
    //   loop over the list of arrays
    //   check the difference of i and i-1 arr lengths
    //   if greater than 1, return arr[i].length -1 as length
      let length = 0
      console.log(arrayOfArrays)
      if(arrayOfArrays == null || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)){
        return 0
      }
      arrayOfArrays.sort((a,b)=>a.length-b.length)
      for(let i =0; i< arrayOfArrays.length; i++ ){
        if( arrayOfArrays[i] == null ){
          return 0
        }else if( arrayOfArrays[i].length < 1 ){
          return 0
        }
        else if(i >= 1){
          let diff = arrayOfArrays[i].length - arrayOfArrays[i-1].length
          console.log(diff)
          if(diff > 1){
            length = arrayOfArrays[i].length - 1
          }  
        }
      }
      return length;
    }
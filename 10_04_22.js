function Xbonacci(signature,n){
    //   create a result arr containing the first elements from signature
    
    //   while result.length < n 
    //   create an array containing from result.length - signature.length -1 to result.length -1
    //   reduce this array and push to result
    //   return the result arr
      let result = signature.slice(0,signature.length)
      
      if( !n){
         return []
      }else if (n < signature.length){
        return signature.slice(0,n)
      }
      while(result.length<n){
        
        let firstIndexToSlice = (result.length - signature.length)
        let lastIndexToSlice = result.length 
        let arrToReduce = result.slice(firstIndexToSlice,lastIndexToSlice)
        let valToAdd = arrToReduce.reduce((acc,curr)=>{return acc+curr},0)
        
        result.push(valToAdd)
        
      }
      
      return result
    }
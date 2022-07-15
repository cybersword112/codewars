function removeSmallest(n, arr) {    
    //   check that arr is valid i.e greater than or equal zero and smaller than total arr length
      if(n <= 0) return arr;
      if(n >= arr.length) return [] ;
    //   while loop for n 
      for(let i = 1; i <= n; i++){
        //   find min with math..min
        let min = Math.min(...arr)
        //   filter arr to remove math min
        let ind = arr.indexOf(min)
        
        arr.splice(ind,1)
      }
      return arr;
    }
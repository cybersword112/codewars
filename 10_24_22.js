function partsSums(ls) {
    //     create a res list 
    //   do a while loop for while ls.length > 0
    //   in the loop reduce the array
    //   add the result to the list 
    //   shift the array(remove first element)
      if(!ls.length){
        return [0]
      }
      let res= []
      let length = ls.length
      let val = ls.reduce((acc,curr)=>acc+curr,0)
      for(let i = 0 ; i< length; i++){
        if(i ===0){
          res.push(val)
        }
        val = val - ls[i]
        res.push(val)
        
    //     ls.shift()
    //     if(i === length -1){
    //       console.log('zero')
    //       res.push(0)
    //     }
      }
      
      return res
    }
<<<<<<< HEAD
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
=======
function sortString(str,order) {
    // declare resulting sorted arr
    let res = []
    // loop over order string with i
    for(let i = 0; i<order.length;i++){
    //   loop while there is still any characters from order in the given str
      while(str.includes(order[i])){
    //     push each ordeerable letter to res
        res.push(order[i])
    //     replace the ordered letter in str with nothing/delete it
        str = str.replace(order[i],'')
      }
    }
    //   the result returns the sorted characters and any remaining unsorted characters in original position after sorted chars
      return res.join('') + str
>>>>>>> 3be7f9d21effc5f64d0e3a3475a3cebe7e0b5b53
    }
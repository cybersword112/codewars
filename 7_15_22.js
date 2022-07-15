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
    }
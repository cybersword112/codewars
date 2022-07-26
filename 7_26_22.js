function birdCode(arr){
    // map over array and in each replace any hyphens with space
      arr = arr.map(item=>{
        item =item.trim()
        item = item.toUpperCase()
        item = item.split('')
        while(item.indexOf('-') !== -1){
          let ind = item.indexOf('-')
          item.splice(ind,1," ")
          } 
        return item.join('')
      })
      let abbs = []
      for(let i = 0 ; i < arr.length; i++){
        //   split each into arr
        let name = arr[i].split(' ')
    //   check each arr length 
        let length= name.length
    //   use a switch case with 4 rules based on length as described in the kata 
        let code=''
        switch (length) {
          case 1:
            code = name[0][0]+name[0][1]+name[0][2]+name[0][3]
            break;
          case 2:
            code = name[0][0]+name[0][1]+name[1][0]+name[1][1]
            break;
            
          case 3:
            code = name[0][0]+name[1][0]+name[2][0]+name[2][1]
            break;
            
          case 4:
            code = name[0][0]+name[1][0]+name[2][0]+name[3][0]
            break;
        }
    //   join the results back to array and then return 
        code.trim()
        abbs.push(code)
      }
    return abbs
    }
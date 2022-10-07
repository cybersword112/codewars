function matrixAddition(a, b){
    //   create a result array filled filled with a.length arrays
      let res = []
      console.log(res)
      for(let i = 0; i < a.length; i++){
        let row = []
        for (let j = 0; j < a[0].length; j++){
          let num = Number(a[i][j]) + Number(b[i][j])
          row.push(num)
        }
        res.push(row)
      }
      return res
    }
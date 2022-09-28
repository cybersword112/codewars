multiplicationTable = function(size) {
    // loop from 1 to n
    let table = []
    for(let i = 1;i<=size; i++){
      let row = []
      for(let j = 1; j<=size;j++){
        let val = j * i
        row.push(val)
      }
      table.push(row)
    }
    console.log(table)
    return table
  //   in the loop:
  //   create another loop from 1 to n
  //   in the inner loop create array
  }
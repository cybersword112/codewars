function highAndLow(numbers){
    //   split the string by space
    //   for loop over the array and turn each into number, then cheeck for higgh or low
      numbers = numbers.split(' ')
      let min = Number(numbers[0])
      let max = Number(numbers[0])
      numbers.forEach((num,index)=>{
        num = Number(num)
        if(num > max){
          max = num
        }
        if(num < min){
          min = num
        }
      })
      return [max,min].join(' ')
    }
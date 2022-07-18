function solution(digits){
    digits = digits.split('')
    let max = 0
    for(let i = 0;i< digits.length-4;i++){
      let num = Number(digits[i]+digits[i+1]+digits[i+2]+digits[i+3]+digits[i+4])
      if(max<num){
        max = num
      }
    }
    return max
  }
function squareSum(numbers){
  let result = 0
  let squarednum = 0
  let square = 0
  for (let i = 0; i < numbers.length; i++){
    square = numbers[i]
    squarednum = square ** 2
    result += squarednum
  }
  return result
}
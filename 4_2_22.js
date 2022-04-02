function largestPairSum (numbers) {
  //TODO: Write your Code here
  numbers.sort((a,b)=>b-a)
  return (numbers[0]+numbers[1])
}
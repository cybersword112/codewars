function oddOrEven(array) {
  //enter code here
 return array.reduce((acc,curr)=>acc+curr,0)%2 == 0 ? "even": "odd"
}
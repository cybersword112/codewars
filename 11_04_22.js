function foldArray(array, runs)
{
//   declare a count var
  let count = 0
  let copy = [...array]
//   start a while loop for count < runs
  while(count<runs){
//   call a function doFold
//     in this function, supply the array
    count++
    copy = doFold(copy)
  }
  return copy
}

// will be given an array of ints and a number to fold the array by n number of times
// output will be the folded array were the numbers will be added for the result

console.log(foldArray([1,2,2,1],1),[2,4])
console.log(foldArray([1,2,3,2,1],2),[5,4])

function doFold(array){
  //     first check that array length is not 1, if it is, return the array as is
//     next set a var odd to true or false by checking length of arr
//     if the array is odd, create a new array by splicing and reversing the second half of the arr
//     add the array nums to the existing array nums in place using a for loop
//     lastly add the remaining middle num to the end of the array
//     return the array
//    if the array is even repeat the above but slice/splice down the middle and return the added nums
  if(array.length == 1){
    return array
  }
  let even = array.length % 2 === 0 ? true : false
  let arr2;
  let mid;
  if(even){
    arr2 = array.splice(array.length/2,array.length-1).reverse()
    console.log(arr2)
  }else if(!even){
    mid = array[Math.floor(array.length/2)]
    array.splice(Math.floor(array.length/2),1)
    arr2 = array.splice(Math.ceil(array.length/2),array.length-1).reverse()
  }
  for(let i = 0; i< array.length;i++){
    array[i] = array[i] + arr2[i]
  }
  if(mid){
    array.push(mid)
  }
  console.log(array)
  return array
}
// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 

function makeAverageLength(array:Array<string>){
    // reduce over the array and divide the result by the length of the outer array
    // use math.round
    // map over the array and replace each subarr with a new array filled with item[0] and filled for the average length
    let average:number = array.reduce((acc,curr)=>{
        return acc + curr.length
    },0)/array.length
    average = Math.round(average)
    array = array.map((subStr:string,index:number)=>{
        return String(subStr[0]).repeat(average)
    })
    return array
}

console.log(makeAverageLength(['u', 'y']),['u', 'y']) 
console.log(makeAverageLength(['aa', 'bbb', 'cccc']),['aaa', 'bbb', 'ccc']) 
console.log(makeAverageLength(['aa', 'bb', 'ddd', 'eee']),['aaa', 'bbb', 'ddd', 'eee']) 
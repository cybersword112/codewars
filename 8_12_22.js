/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    return nums.map(num=>num ** 2).sort((a,b)=>{
        return a-b
    })
};


// will be provided and array of ints 
// the return should be an array of the numbers squared

console.log(sortedSquares([1,2,3]),[1,4,9])
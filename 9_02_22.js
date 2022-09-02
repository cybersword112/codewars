/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let lo = 0
    let hi = nums.length
    while(lo < hi){
        let mid = lo + Math.floor((hi-lo)/2)
        if(target> nums[mid]){
            lo = mid+1
        }else{
            hi = mid
        }
    }
    return lo
};

// input will be an array of ints and an int value
// goal is to search the array for the value of the number, if it is found return the index, if it is not ,return the index where it would be


console.log(searchInsert([1,2,3,5,6],4),3)
console.log(searchInsert([1,2,3,4,5,6],3),2)
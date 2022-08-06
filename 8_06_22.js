/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    // find and place unique numbers in the beginning of the array
    let newArr =[]
    for(let i =0;i<nums.length;i++){
        if (newArr.indexOf(nums[i]) === -1 ){
            newArr.push(nums[i])
        }
    }
    nums.unshift(...newArr)
//     count how many numbers were re-ordered to beginning and return that number
    return newArr.length
};

// will be provided an array of integers
// the array is sorted in ascending order
// the return should be the array with the duplicate cleansed list in the front of the original array

console.log(removeDuplicates([1,2,2,3,3,4,5,6,6]),[1,2,3,4,5,6,1,2,2,3,3,4,5,6,6])
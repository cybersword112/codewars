/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    // implement a binary search/ divide and conquer to find an index of a value,
    //after an index of our target is found, perform another divide and conquer to find the first and last
    function findIndex(nums,target,first){
        let index = -1
        let max = nums.length -1
        let min = 0
        while(min <= max){
            let guess = max - ~~((max - min)/2)
            if(nums[guess] === target){
                if(first){
                    max = guess -1 
                }else{
                    min = guess + 1
                }
                index = guess
            }else{
                if(nums[guess]>target){
                    max = guess -1
                }else{
                    min = guess + 1
                }
            }
        }
        return index

    }

    return [findIndex(nums,target,true),findIndex(nums,target,false)]
};

// input will be a list of nums and a target num
// output should be the first and last index where the num is located 
console.log(searchRange([5,7,7,8,8,10],7),[1,2])
Console

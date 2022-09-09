/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // sort the array
        nums.sort((a,b)=>a-b)
        for(let i =0; i<nums.length-1;i++){
            if(nums[i]===nums[i+1]){
                return true
            }
        }
        return false
    //     loop over the array from 0 to length -1
    //     check if i == i+1
    //     return true
    //     after loop return false
        
    };
    
    
    
    // will be given an input of an array of integers
    // output should be boolean for if the array contains any duplicate ints
    
    
    console.log(containsDuplicate([1,2,3,3,4,5]),true)
    console.log(containsDuplicate([11,12,46,67,23,45,13,7]),false)
    
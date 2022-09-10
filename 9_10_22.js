/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // create a new map
    //     loop over nums and check if map has nums[i] if yes return true, if false add to map
        let map = new Map()
        for (let i =0; i<nums.length;i++){
            if(map.has(nums[i])){
                return true
            }else{
                map.set(nums[i],1)
            }
        }
        return false
        
    };
    
    
    
    // will be given an input of an array of integers
    // output should be boolean for if the array contains any duplicate ints
    
    
    console.log(containsDuplicate([1,2,3,3,4,5]),true)
    console.log(containsDuplicate([11,12,46,67,23,45,13,7]),false)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //     declare a cache
    //     loop over the nums array
    //      for every value of the array, store its indices as the value, and its differnce to equal target, as its key.
    //      check that the array[nums] difference to target is not already present in the array
        let cache = {}
        let res =[]
        nums.forEach((num,index)=>{
            let difference = target - num
            if(cache[difference] != undefined){
                res = [cache[difference],index]
            }else{
                cache[num] = index
            }
        })
        return res
    };
    
    // input will be an array of ints and a target number
    // output should be the indices of the two numbers that add up to target 
    
    console.log(twoSum([1,4,7,9],13),[1,3])
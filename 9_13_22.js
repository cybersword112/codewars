/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // declare a new hash map
        let map = new Map()
    //     loop over the array of nums
        for (let i = 0 ; i < nums.length; i++){
    //     for each num check that the difference between num and target is not present in the hashmap already
            let diff = target - nums[i]
            if(map.has(diff)){
            // if no, add num to map with index as value and move on.
                return Array.from([map.get(diff),i])
            }else{
    //     if yes, return the current index and the index where the difference is located
                map.set(nums[i],i)    
            }
            
        }
    };
    
    
    // element cannot be used twice 
    // one array, one integer arguments
    // any special cases?
    // no all ints and array only positive , no crazy characters or letters
    // theere will always be a solution 
    
    // we want the resulting indices not the integers
    // return an array of the indices
    
    
    // twoSum([1,3,4],7) => [1,2]
    
    // twoSum([5,8,10,1],11) => [2,3]
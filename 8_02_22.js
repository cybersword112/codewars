/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //     setup two for loops
        for(let i = 0 ; i< nums.length; i++){
            //   the inner loops number will be compared to the outer loops number of the array
            for(let j = 0 ; j < nums.length ; j++ ){
                //     if the sum of these two is equal to our target => return the loop indices
                if((nums[i] + nums[j]) === target && i != j){ 
                    return [i,j]
                }
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
    
    
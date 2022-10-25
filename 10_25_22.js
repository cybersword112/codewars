/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //     set the the n value to nums.length /2
    //     create an object to store counts
    //     loop over the nums
    //     check if object[num] exists and increment count if so, if not, create it and equal to 1
    //     check over the object for a count greater than n.
        let n = nums.length/2
        let counts = {}
        for(let num of nums){
            if(counts[num]){
                counts[num] += 1
            }else{
                counts[num] =1
            }
        }
     for(const [num, count] of Object.entries(counts)){
         if(count > n){
             return num
         }
     }
    };
    
    // will be provided a list of nums 
    // return should be the num that appears more than half the length of the array
    
    console.log(majorityElement([1,2,3,3,3,3]),3)
    console.log(majorityElement([1,4,5,6,1,5,8,9,5,5,5,5,5,5]),5)
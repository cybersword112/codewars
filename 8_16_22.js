/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //     two methods hash and check/add or sort and compare neighbors
    //     for the neighbor method:
        //      sort the array
                // nums = nums.sort((a,b)=>a-b)
            //     loop the array and check vs previous element for dup
                // for(let i =0; i<nums.length-1;i++){
                //     if(nums[i]===nums[i+1]){
                //         return true
                //     }
                // }
                // return false
    //     for the hashmap method:
    //          create a new hashmap to store value pairs
        let map = new Map()
    //     loop over array and check if hashmap has value if not store it, if yes return true
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])){
                return true
            }else{
                map.set(nums[i],1)
            }
        }
        return false
    };
    
    // will be given an array of ints
    // return should be boolean of if there are any duplicate values
    
    console.log(containsDuplicate([1,2,4,5,2]),true)
    console.log(containsDuplicate([1,2,3,4,5]),false)
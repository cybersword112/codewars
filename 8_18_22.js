/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    //     create a hashmap
        let counts = new Map()
    //     loop over the array
        for(let i = 0 ;i<nums.length;i++){
    //     check if num is in hashmap, if not add. if yes, increment count.
            if(counts.has(nums[i])){
                counts.set(nums[i],counts.get(nums[i])+1)
            }else{
                counts.set(nums[i],1)
            }
        }
    // check hashmap for value of 1
        for (const [key, value] of counts) {
          if(value===1){
              return key
          }
        }  
    };
    
    
    // input will be an array of ints with repeating occurences except for 1 int that only has 1 occurence
    // the output will be the int that only occurs once
    
    console.log(singleNumber([0,0,1,1,2,3,3]),2)
    console.log(singleNumber([2,2,4,5,6,3,4,5,6]),3)
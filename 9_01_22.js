/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let count = 0
    // nums = nums.reverse()
    for(let i = 0; i < nums.length;i++){
        if(nums[i] === val){
            let newLast = nums.splice(i,1)
            nums.push(newLast)
            count++
            --i
        }
    }
        return nums.length - count
    };
    
    // will be provided an array of nums
    // output will be the same array with occurences of val removed and the resulting array placed at the beginning of the nums array
    
    
    console.log(removeElement([1,2,3,4,5,6],3),5)
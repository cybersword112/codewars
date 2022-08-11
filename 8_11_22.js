/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2)
    return nums1.sort((a,b)=>{return a-b})
};

// two arrays of ints and then two ints representing the array lengths
// the length of array1 will be the sum of array length ints M and N
// the return should be both arrays combined and sorted and stored in array nums1
// the last n elements of array nums1 should be set to 0


console.log(merge([1,3,6,0,0,0],3,[2,4,5],3),[1,2,3,4,5,6])
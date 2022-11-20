function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let array = mergeArrays(nums1,nums2,nums1.length,nums2.length)

    console.log(array)
    if(array.length %2 ==0){
        let n1 = array[Math.floor((array.length-1)/2)]
        console.log(n1)
        let n2 = array[Math.floor((array.length-1)/2)+1]
        console.log(n2)

        return ((n1+n2)/2)
    }else{
        return array[Math.floor((array.length)/2)]
    }

};

function mergeArrays(array1:number[],array2:number[],n1:number,n2:number):number[] {
    let k:number = 0
    let i:number = 0

    let array3 = []
    while(i<n1){
        array3.push(array1[i])
        i++
    }
    while(k<n2){
        array3.push(array2[k])
        k++
    }
    return array3.sort((a,b)=>a-b)
}


// given two sorted arrays
// return the median of both arrays 
// runtime must be O((m+n)Log(M+n))

// current solution is brute force combnination and sort
// runtime is likely O(M+N)
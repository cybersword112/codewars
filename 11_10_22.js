//TASK: implement mergesort!
// protip: Split the array into halves and merge them recursively 
// protip: return once we hit an array with a single item. That is a sorted array of size 1!
// protip: compare the arrays item by item and return the concatenated result
function merge(l1,l2){
    let res = []
    let leftInd = 0
    let rightInd = 0

    while(leftInd < l1.length && rightInd < l2.length){
        let left = l1[leftInd]
        let right = l2[rightInd]
        if(left < right){
            res.push(left)
            leftInd++
        }else if(right<left){
            res.push(right)
            rightInd++
        }
    }
    return res.concat(l1.slice(leftInd)).concat(l2.slice(rightInd))
}


function mergeSort(array){
    if(array.length < 2){
        return array
    }
    let left = array.slice(0,Math.floor(array.length/2))
    let right = array.slice(Math.floor(array.length/2))
    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left,right)
}

console.log(mergeSort([13,17,2,9,14,32,97,31,18,1]))
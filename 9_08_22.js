function findRepeatedNum(A){
    // sort the array and declare a repeated Number var
    A.sort()
    let repeatedNum;
    // first loop to find the repeated number, break as soon as it is found so the smallest number is returned
    for(let i = 0; i< A.length;i++){
        if(A.indexOf(A[i]) !== A.lastIndexOf(A[i])){
            repeatedNum = A[i]
            // remove the repeated num before moving to the next loop
            A.splice(i,1)
            break
        }
    }
    // re-sort after removing the duplicate array (probably unnecessary)
    A.sort()
    let replacedNum;
    // loop over the array and check for successive int values, return the missing correct successive int value
    for(let i = 0;i<A.length;i++){
        if(A[i]+1 !== A[i+1]){
            replacedNum = A[i]+1
            break
        }
    }
    return [repeatedNum,replacedNum]
}

// input is an unsorted array of ints with one or more repeated ints to be found
// output is the smallest repeated int and the value that should have been in its position.

console.log(findRepeatedNum([4,5,7,2,3,3,1]),[3,6])
console.log(findRepeatedNum([9,10,18,11,13,12,17,12,15,16]),[12,14])
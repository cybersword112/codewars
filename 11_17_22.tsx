// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(array:number[]){
    // loop over the tuple
    // set find max and min
    // loop again and return the index that is less than max and greater than min
    let max:number = Math.max(...array)
    let min:number = Math.min(...array)
    for(let i:number = 0; i< array.length; i++){
        if(array[i] < max && array[i] > min){
            return i 
        }
    }
}

console.log(gimme([5, 10, 14]),1)
console.log(gimme([2, 3, 1]),0)
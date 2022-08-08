/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //     create a  variable to hold the new number
        let newNum;
    //     join the provided array into a string.
        digits = digits.join('')
    //     turn that string into an Number type object
        console.log(digits)
        digits = BigInt(digits)
        console.log(digits)
    //     add one to that number and store it in the new number var
        newNum = digits + BigInt(1)
    //     turn new number to a string then split that to an array
        newNum = String(newNum).split('')
        console.log(newNum)
    //     iterate over and turn each element to an array
        newNum = newNum.map(num=> +num)
    //     return the new number
        return newNum
    };
    
    // given an array of ints that represent a large integer in correct order
    // need to increment that number by 1 and then return the resulting number
    
    // return an array of ints that represent the new number
    
    
    console.log(plusOne([1,2,9]),[1,3,0])
    console.log(plusOne([2,5,9,9]),[2,6,0,0])
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //     split the number into an array
        x = String(x).split('')
        if(x[0]=== '-') return false
    //     determine if the array length is even or odd
        let evenOdd = x.length % 2 === 0 
        let left;
        let right;
    //     if odd:
        if(!evenOdd){
            console.log('begin odd')
            console.log(x)
        //         split at the middle integar
            x.splice(x.length/2,1)
            console.log(x)
            left = x.splice(0,(x.length/2))
            right = x.reverse()
            console.log(left)
            console.log(right)
            console.log('end odd')
    //          compare value of left side to value of right side reversed
            
        }
    //     if even:
        else if(evenOdd){
    //         split evenly and compare value of left side with value of right side reversed
            console.log('begin even')
            console.log(x)
            left = x.splice(0,Math.floor((x.length/2)))
            right = x.reverse()
            console.log(left)
            console.log(right)
            console.log('end even')
        }
        return Number(left.join('')) == Number(right.join(''))
    };
    
    
    // input will be a an integer
    // output will be boolean true if integer is a palindrome or false if not
    
    console.log(isPalindrome(131),true)
    console.log(isPalindrome(145),false)
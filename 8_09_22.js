/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    x = Math.sqrt(x)
    return Math.floor(x)
};

// input is an non negative integar
// return is the square root of that function with no decimal places
// do not use built in exponent operators

console.log(mySqrt(314),Math.sqrt(314))
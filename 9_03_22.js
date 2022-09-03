/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    //     pareseint of a and b and store in variables
        a = BigInt(`0b${a}`)
        b = BigInt(`0b${b}`)
        console.log(a,b)
    //     add the numbers
        let c = a+b
    //     convert toString(2) to get the binary sum and return
        return c.toString(2)
    };
    
    // two strings of binary numbers will be provided 
    // return should be the sum of the two numbers in binary provided returned as a string 
    
    console.log(addBinary("01","01"),"10")
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    //    turn the number into a string and split it
    //     check if the first char is '-'
    //     if yes let neg = true and shift the array
    //     reverse the resultant array
    //     join the array
    //     parseInt the resulting string
    //     check val of neg and mult by -1 if true
    //     return the num
        let neg = false
        let num = String(x).split('')
        if(num[0] === "-"){
            neg = true
        }
        num = num.reverse().join('')
        num = parseInt(num)
        if(neg){
            num = num * -1
        }
        if(num > Math.pow(2,31) -1 || num < Math.pow(2,31) * -1 ){
            return 0
        }
        return num
        
    };
    
    // input will be a signed integer
    // output should be the integer reversed with sign
    
    console.log(reverse(123),321)
    console.log(reverse(-581),-185)
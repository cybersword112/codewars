/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    //     instantiate result array
        let res = []
    //     loop from 1 to n
        for(let i = 1;i<=n;i++){
    //     in loop, check first if the fizzbuzz criteria is met, then check the individual criteria
            let app =''
            if(i%3 ===0 && i%5 ===0){
                app = 'FizzBuzz'
            }else if(i % 3 ===0){
                app='Fizz'
            }else if(i%5 ===0){
                app='Buzz'
            }else{
                app=String(i)
            }
            res.push(app)
        }
    //     depending on the result of checks, append the string number or word to array
    //     return array
        return res
        
    };
    
    // input will be an integer
    // output should be an array of string ints from 1 to that number
    // in the array if an number is divisible by 3 it should be replaced by fizz and if by 5 then buzz
    // if by both then fizzbuzz 
    
    console.log(fizzBuzz(5),['1','2','fizz','4','buzz'])
// Given a number as an input, print out every integer from 1 to that number. 
// However, when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, 
// print out “Fizz Buzz”.

function fizzBuzz(num:number):void{
    // Loop through from 1 to number inclusive
    // at every iteration, first check that i is div by 2 and 3 both,
    // if false check div by each and console log the corresponding phrase
    // if none are applicable log the loop var i
    for(let i = 1;i<=num;i++){
        if(i%2 ===0 && i % 3 ===0){
            console.log('Fizz Buzz')
        }else if(i % 2 === 0){
            console.log("Fizz")
        }else if(i % 3 === 0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(81)
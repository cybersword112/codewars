function solution(number){
    // create a res var
    //   check edge case
      // loop up to number
    // check if i is mod 3 and 5 if so, add it
    //   check if mod 3 and then mod 5 and add if either
      let res = 0
      if(number<0 ) return 0;
      for(let i = 1; i < number; i++){
        if(i%3 ===0 && i % 5 === 0){
          res += i
        }else if(i % 3 ===0 || i % 5 ===0){
          res+= i
        }
      }
      return res
    }
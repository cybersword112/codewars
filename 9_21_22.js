function solution(str){
    //   declare a result arr
    //   check the length of the string is even or odd
    //   if even, loop over the string and iterate i by 2 each time
    //   push i and i-1 into a string and push to result arr
    //   if odd
    //   push to the end of the string the character '_' and repeat the above
      
      let resArr = []
      if(str.length % 2 !== 0){
        str += '_'
      }
      for(let i = 0 ; i < str.length ; i+=2){
        resArr.push((str[i]+str[i+1]))
      }
      return resArr
    }
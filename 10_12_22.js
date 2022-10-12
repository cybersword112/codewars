function dup(s) {
    //..
    // map over the array
    //   split the word
    //   loop over the word
    //   if the i char is same as i -1 char
    //   splice out the i char
    //   i --
    //   return the word
     return s.map((word,index)=>{
       word = word.split('')
       for(let i = 1; i<word.length; i++){
         if(word[i] === word[i-1]){
           word.splice(i,1)
           i = i-1
         }
       }
       return word.join('')
     })
    };
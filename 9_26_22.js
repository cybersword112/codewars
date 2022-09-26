function encode(string) {
    //   declare an array of vowels
    //   split and map over the string.
    //   if a char is a vowel, replace it with the corresponding index+1
    //   return the joined string
      let vowels = ['a','e','i','o','u']
      string = string.split('').map((char,index)=>{
        if(vowels.indexOf(char) !== -1){
          char = vowels.indexOf(char) + 1
        }
        return char
      }).join('')
      console.log(string)
      return string
    }
    
    function decode(string) {
    //   declare an array of vowels
    //   split and map over the string.
    //   if a char is a number, replace it with the corresponding vowel index -1
    //   return the joined string
      let vowels = ['a','e','i','o','u']
      let nums = ['1','2','3','4','5']
      string = string.split('').map((char,index)=>{
        if(nums.includes(char)){
          char = vowels[Number(char)-1]
        }
        return char
      }).join('')
      console.log(string)
      return string
    }
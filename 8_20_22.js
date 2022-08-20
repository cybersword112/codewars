function longestConsec(strarr, k) {
    //   check for edge case
      if( k<=0 || !strarr.length || strarr.length === 1 || k >= strarr.length){
        return ''
      }
        // create a hashmap consisting of key = length concat and value = word
      let map = new Map()
    //   loop over array
      for(let i = 0 ; i<strarr.length; i++){
    //   concat each i + k-1 words
        let newWord='';
        let j = 0
        while(j<k && i+j<strarr.length){
          newWord+=strarr[i+j]
          j++
        }
        map.set(newWord.length,newWord)
    //   store word and length in hashmap
      }
    //   loop over hashmap and return the value of the longest key
      let key = Math.max(...map.keys())
      return map.get(key)
    }
    
    // will be provide an array of strings
    // return will be the first longest string consisting of K strings concatenated together
    
    console.log(longestConsec(['arr','butter','he'],2),'arrbutter')
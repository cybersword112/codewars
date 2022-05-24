function longestConsec(strarr, k) {
    let newList = []
    if(strarr.length ==0 || k > strarr.length || k <= 0){return ''}else{
      for (let i =0; i<strarr.length;i++){
        let wordList =[]
        for (let j = i; j< i+k; j++){
          wordList.push(strarr[j])
        }
        newList.push(wordList.join(""))
      }
    //   newList.sort((a,b)=>b.length-a.length)
    //   console.log(newList)
      
    let MaxLng_Str = Math.max(...newList.map( item => item.length))
    return newList.filter(item => item.length === MaxLng_Str)[0]
    }
    }
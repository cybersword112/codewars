function reverse(str){
    //  split() string to arr
      let arr = str.split(' ')
    //   map() over array
      arr = arr.map((item,index)=>{
    //   if index is not divisible by 2 then reverse it
        if(index % 2 != 0){
    //   to reverse: split the word to array and reverse() array
          return item.split('').reverse().join('')
        }else{
          return item
        }
      })
    //   join the resulting arrays and trim the whitespace then return
      return arr.join(' ').trim()
    }
function comp(array1, array2){
    if (!array1 || !array2){
      return false
    }else{
      array1 = array1.map(item=>item**2)
      let arr = [array1,array2]
      arr.forEach(item=>item.sort((a,b)=>a-b))
      return !array1.some((item,index)=>item != array2[index])
    }
  }
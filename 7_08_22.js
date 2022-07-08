function sortArray(array) {
    let oddsIndex= []
    let oddsNums=[]
    array.map((item,index)=>{
      if(item %2 != 0){
        oddsIndex.push(index)
        oddsNums.push(item)
      }
    })
    oddsNums.sort((a,b)=> {return a-b})
    
    for(let i = 0; i < oddsIndex.length; i++){
      array[oddsIndex[i]] = oddsNums[i] 
    }
    return array
  
  }
function incrementString (strng) {
  // return incrementedString
  let numbIndex = []
  let numberArr = []
  let newNumb = "1"
  strng = strng.split("")
  strng.map((item,index)=>{if(!isNaN(item)){numbIndex.push(index)}})
  if(numbIndex.length > 0){
    numbIndex.forEach((item)=>numberArr.push(strng[item]))
    newNumb = String(Number(numberArr.join("")) + 1)
    while(newNumb.length < numbIndex.length){
      newNumb = Array.from(newNumb)
      newNumb.unshift("0")
      newNumb = newNumb.join("")
    }
  }else{
    numbIndex[0] = strng.length
  }
     
  strng.splice(numbIndex[0],numbIndex.length,newNumb)
  console.log(numbIndex,numberArr)
  return strng.join("")
}
function SearchingChallenge(strArr) { 
    // declare a new map
    let map = new Map()
    // foreach over the array
    strArr.forEach((item,index,arr)=>{
    //  extract number value from item
      let num = parseInt(item.match(/\d+/))
      // check if negative
      if(item[item.indexOf(':')+1] === '-'){
        num = num * -1
      }
    // check if item[0] is in map
    //  add to map if not and give value of number
    //  if in map increment value by number
      if (!map.has(item[0])){
        map.set(item[0],num)
      }else{
        map.set(item[0], parseInt(map.get(item[0]))+num)
      }
    })
    
    // console.log(map)
    // foreach value in map,
    // append to array as string
    // join array with ','
    let result =[]
    map.forEach((item,key,map)=>{
      if(item !== 0){
        result.push(`${key}:${item}`.trim())
      }
    })
      // code goes here
      result.sort((a,b)=>{
        return a.charCodeAt(0) - b.charCodeAt(0)
      })  
      result = result.join(',')
      console.log(result)
      return result.trim()
    }
       
    // keep this function call here 
    console.log(SearchingChallenge(readline()));
    
    // input will be an object with key value pairs.
    // the output should be a string that sums the values of all the same keys
    
    // console.log(SearchingChallenge(['A:-4','B:2','A:2']),"A:6,B:2")
    
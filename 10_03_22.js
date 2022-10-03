function highestRank(arr){
    //Your Code logic should written here
    //   create a new map
    //   loop over the array
    //   for each number check if already in the map
    //   if yes increment its value
    //   if no, add to map with value of 1
    //   set a max variable
    //   loop over array and check each map value vs max
    //   if greater then set to max
    //   return max
      let map = new Map()
      for(let i = 0 ; i < arr.length; i++){
        if(map.has(arr[i])){
          map.set(arr[i],map.get(arr[i])+1)
        }else{
          map.set(arr[i],1)
        }
      }
      let maxNum = null
      let maxCount = 0
      for(let i = 0; i< arr.length;i++){
        if(map.get(arr[i]) > maxCount ){
          maxCount = map.get(arr[i])
          maxNum = arr[i]
        }
      }
      return maxNum
    }
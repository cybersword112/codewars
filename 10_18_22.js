function solve(arr){
    //declare a new map object
  //   loop over the array and add each to the map, if already present increment their value by 1
  //    sort the array by using sort and using the value for each numbers map
    let map = new Map()
    arr.sort((a,b)=>a-b)
    for(let i = 0; i<arr.length;i++){
      if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
      }else{
        map.set(arr[i],1)
      }
    }
    arr.sort((a,b)=>{
      let diff = map.get(b) - map.get(a)
      if(diff !== 0 ){
        return diff
      }else if(diff === 0){
        return a - b
      }
    })
    return arr
  }
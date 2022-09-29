function twoSum(numbers, target) {
    //   create a map value
    //  loop over the numbers array
    //   set diff = target - nums[i]
    //   check if map has diff,
    //   if yes return array of indexes for answ
    //   if no, add nums[i] to the map
      let map = new Map()
      for(let i = 0 ; i < numbers.length; i++){
        let diff = target - numbers[i]
        if(map.has(diff)){
          return Array.from([map.get(diff),i])
        }
        map.set(numbers[i],i)
      }
    }
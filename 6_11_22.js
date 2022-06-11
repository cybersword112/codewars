function rowWeights(array){
    for(let i = 2 ; i < array.length; i++){
    if(i % 2 ==0){array[0] += array[i]}
      else{array[1] += array[i]}
  }
    array.splice(2)
    if(!array[1]){array.push(0)}
    return array
  }
function stray(numbers) {
  let testing = function(test){
    for(let i = 0;i < numbers.length;i++){
      if(numbers[i] != test){
        return numbers[i]
      }}
  }
  if (numbers[0]==numbers[1] || numbers[0]==numbers[2]){
    let test = numbers[0]
    return testing(test)
  }else{
    return numbers[0]
  }
}
var capitals = function (word) {
    let cap=[]
    for (let i = 0 ; i< word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        cap.push(i)
      }
    }
    return cap
  };
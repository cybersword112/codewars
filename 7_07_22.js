function digital_root(n) {
    let int = n 
    while(String(int).split("").length > 1){
      console.log(int)
      int = String(int).split("").map(item=>Number(item)).reduce((acc,curr)=>acc+curr,0)
    }
    console.log(int)
    return int
  }
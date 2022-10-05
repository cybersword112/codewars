function dashatize(num) {
    return num = num.toString().split("").map((c)=>{
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
  };
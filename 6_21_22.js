var countBits = function(n) {
    if(n>0){
      let bit = n.toString(2)
      console.log(bit)
      let bitCount = bit.split("").filter(item=>item=='1').join("")
      console.log(bitCount)
      return bitCount.length
    }
    else{
      return 0
    }
  };
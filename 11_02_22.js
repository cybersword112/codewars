function rgb(r, g, b){
    // complete this function 
    let res = []
    let rHex = toHex(r)
    let gHex = toHex(g)
    let bHex = toHex(b)
    res.push(rHex,gHex,bHex)
    return res.join('')
  }
  
  function toHex(d){
    if(d < 0){
      return '00'
    }else if (d > 255){
      return 'FF'
    }else{
      return (d.toString(16).toUpperCase().padStart(2,'0'))
    }
  }
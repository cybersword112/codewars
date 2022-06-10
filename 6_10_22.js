function solve(s){
    let up = 0
    let down = 0
    s=s.split('')
    s.forEach(item=>{
      if(item === item.toUpperCase()){
        up++
      }else if(item === item.toLowerCase()){
        down++
      }
    })
    up > down ? s = s.map(item=>item = item.toUpperCase()) : s= s.map(item=>item = item.toLowerCase())
    s=s.join('')
    return s
  }
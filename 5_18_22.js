function longest(s1, s2) {
    let str =[]
    s1 = s1.split("").sort()
    s2 = s2.split("").sort()
    for (let i = 0 ; i < Math.max(s1.length, s2.length);i++){
      if (s1[i] && !str.includes(s1[i])){
        str.push(s1[i])
      }if(s2[i] && !str.includes(s2[i])){
        str.push(s2[i])
      }
    }
    return str.sort().join("")
  }
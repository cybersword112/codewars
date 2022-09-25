function solve(s) {
    s = s.replace(/[aeiou]/gi, ' ').split(' ')
    console.log(s)
    let max = 0 
    s.map((string,index)=>{
      string=string.split('')
      console.log(string)
      let val = string.reduce((acc,curr)=> acc + curr.charCodeAt(0)-96,0)
      console.log(val)
      if(val>max){
        max = val
      }
    })
    return max
  };
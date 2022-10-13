function sumConsecutives(s) {
    // your code
//   declare a consecutive var and set to 1
//   declare an index var and set to 0
//   loop over s
//   in s if s[i] is equal to s[i-1] then increment s by 1
//   and set index to i-1
//   if it is not equal:
//   set copy to s.slice(index,index+s)
//   reduce the copy
//   s.splice(index,index+s,the reduced value)
  let cons = 0
  for(let i =0; i<s.length; i++){
    if(s[i] === s[i-1]){
      cons++
    }
    if(cons >= 1 && s[i] !== s[i+1]){
      let copy = s.slice(i-cons,i+1)
      let val = copy.reduce((acc,curr)=>acc+curr)
      s.splice(i-cons,cons+1,val)
      i = i-cons
      cons = 0
    }
  }
  console.log(s)
  return s
  
}
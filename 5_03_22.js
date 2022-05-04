function wave(str){
  let res = []
  for(let i =0;i<str.length;i++){
    if(str[i]!= " "){
      let mod = str[i].toUpperCase()
      let word = str
      console.log(mod,str,word)
      word = str.split("")
      word.splice(i,1,mod)
      word = word.join("")
      res.push(word)}
    }
  return res
}
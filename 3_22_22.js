function XO(str) {
  //code here
let xCount = 0
let oCount = 0
str = str.toLowerCase()
for (let i = 0; i< str.length; i++){
  if (str[i] == "x"){
    xCount +=1
  }else if (str[i] == "o"){
    oCount += 1
  }
}
if (xCount == oCount){
  return true
}else{
  return false
}
}
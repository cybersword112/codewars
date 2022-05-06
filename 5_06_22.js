function persistence(num) {
  let i = 0
  while (String(num).length>1){
    let numarr = String(num).split("")
    num = numarr.map(item=> Number(item))
    num = num.reduce((acc,curr)=> acc * curr)
    console.log(num)
    i++
  }
  return i
}
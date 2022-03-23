function squareDigits(num){
  let nums= num.toString()
  nums = nums.split("")
  let sqnum= nums.map(number => number ** 2)
  sqnum = sqnum.join("")
  sqnum = sqnum.trim(", \''")
  sqnum = parseInt(sqnum)
  return sqnum;
}
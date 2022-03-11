function countBy(x, n) {
  let z = [];
  let num = 0
  for (let i = 1; i <= n;i++){
    num = i * x
    z.push(num)
  }

  return z;
}
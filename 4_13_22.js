function race(v1, v2, g) {
    // your code
//   v1 and v2 and t are converted to base in seconds
  v1 = ((v1/60)/60)
  let d1 = g
  v2 = ((v2/60)/60)
  let d2 = 0
  let t = 0
  if (v1>=v2 ){return null}
  while (d1>d2){
    d1 = Number(((v1*t)+ g).toFixed(9))
    d2 = Number((v2*t).toFixed(9)) 
    if ((d1 -d2) > 1 ){t+=1}
    else if (d1-d2 <=1){t+=.01}
  }
  let h = Math.floor(t/3600)
  let m = Math.floor((t-(h*3600))/60)
  let s = Math.floor((t - (h*3600)) -(m*60))
  t = [h,m,s]
  console.log(t,v1,v2)
  return t
}
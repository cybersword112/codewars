function accum(s) {
  return s.split("").map((e,i,a)=>{let letters = "";for(let b = 0 ;b<i; b++){letters += e.toLowerCase()}return `${e.toUpperCase()}${letters}`}).join("-")
 }
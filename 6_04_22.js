function revrot(str, sz) {
    if (sz < 1 || sz > str.length) 
      return '';
  
    let reverse = s => s.split('').reverse().join('');
    let rotate  = s => s.slice(1) + s.slice(0, 1);
    let sum_cubes = c => c.split('').reduce((a, b) => a + + (b ** 3), 0); 
  
    let strArr =[]
    str = str.split('')
    while(str.length >= sz){
      strArr.push(str.splice(0,sz).join(''))
    }
    return strArr.map(c=>sum_cubes(c) % 2 ? rotate(c) : reverse(c)).join('')
  }
function switcheroo(x){
    // loop over x after splitting to array
    //   if item is a replace with b if b replace with a
    //   join and return
    x= x.split('')
      for (let i = 0 ;i<x.length;i++){
        if(x[i] === 'a'){
          x[i] = 'b'
        }else if(x[i]==='b'){
          x[i] = 'a'
        }
      }
      return x.join('')
    }
    // input will be string of letters a b and c
    // output will be same string with a s and b s swapped
    
    
    console.log(switcheroo('abc'),'bac')
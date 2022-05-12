function diamond(n){
    if (n<= 0 || n%2 ==0){ return null }
     let str = ""
     for (let i = 0; i<n ; i++){
       let length = Math.abs((n-2*i-1)/2)
       str += ' '.repeat(length)
       str += '*'.repeat(n-2*length)
       str += '\n'
     }
     return str
   }
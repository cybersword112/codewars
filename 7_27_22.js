function vertMirror(strng) {
    return strng.split('\n').map(item=>{return item.split('').reverse().join('')}).join('\n')
 }
 function horMirror(strng) {
     return strng.split('\n').reverse().join('\n')
 }
 function oper(fct, s) {
   let res;
   res = fct(s)
   return res
 }
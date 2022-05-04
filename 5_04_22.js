function count (string) {
  let obj = {}
  let word = string.split("")
  word.forEach(item=>{let count = string.count(item);obj[`${item}`] = count})
  console.log(obj)
   return obj;
}

String.prototype.count=function(c) { 
  let result = 0, i = 0;
  for(i;i<this.length;i++)if(this[i]==c)result++;
  return result;
};
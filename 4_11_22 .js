var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if (typeof(iterable)==="string"){
    iterable = iterable.split("")
  }else if(typeof(iterable)==="number"){
    iterable = ((String(iterable)).split("")).map(thing=>Number(thing))
  }
  if (iterable[0] === iterable[1]){
    iterable.splice(1,1)
  }
  for (let i = 0; i< iterable.length; i++){
    if (iterable[i] === iterable[i+1]){
      iterable.splice(i+1,1)
      if (iterable[i] === iterable[i+1]){
        iterable.splice(i+1,1)
      }
    }
  }
  return Array.from(iterable)
}
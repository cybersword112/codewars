function minValue(values){
  //your code here
  values.sort((a,b)=>a-b)
  let nodups = []
  for(let thing in values){
    if(nodups.indexOf(values[thing])==-1){
      nodups.push(values[thing])
    }
  }
  return Number(nodups.map(thing=>String(thing)).join(""))
  
}
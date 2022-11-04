Math.round = function(number) {
    number = number.toString()
    if(!number.includes('.')){
      return Number(number)
    }
    let decimal = Number(Number(number.slice(number.indexOf('.'))))
    if(String(decimal).length < 2){
      decimal = decimal.toPrecision(2)
    }
    console.log(decimal)
    if(decimal >= .50){
      number = Number(number.slice(0,number.indexOf('.')+1)) + 1
    }else if(decimal < .50){
      number = Number(number.slice(0,number.indexOf('.')+1))
    }
    return number; // TODO: fix this
  };
  
  
  
  Math.ceil = function(number) {
    number = number.toString()
    if(!number.includes('.')){
      return Number(number)
    }
    number = Number(number.slice(0,number.indexOf('.')+1)) + 1
    return number; // TODO: fix this
  };
  
  Math.floor = function(number) {
    number = number.toString()
    if(!number.includes('.')){
      return Number(number)
    }
    number = Number(number.slice(0,number.indexOf('.')+1))
    return number; // TODO: fix this
  };
  
  console.log(Math.round(2.49999))
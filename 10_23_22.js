// Return the output array, and ignore all non-op characters
function parse( data )
{
//   declare initital value
//   split and loop over data
//   for each character, perform the operation, return value
  let val = 0
  let res = []
  data = data.split('')
  for(let i = 0;i<data.length; i ++){
    if(data[i] === 'i'){
      val = val + 1
    }else if(data[i] === 'd'){
      val = val - 1
    }else if(data[i] ==='s'){
      val = val * val
    }else if(data[i] === "o"){
      res.push(val)
    }
  }
  return res
}
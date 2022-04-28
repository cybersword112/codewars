function getSum( a,b )
{
  return b > a ? bGreater(a,b) : aGreater(a,b)
}

function bGreater(a,b){
  let sum =0
  if( b != a){
    for (let i = a; i <= b; i++){
      sum += i
    }
    return sum
  }else{
    return a
  }
}
function aGreater(a,b){
  let sum =0
  if( b != a){
    for (let i = b; i <= a; i++){
      sum += i
    }
    return sum
  }else{
    return a
  }
}
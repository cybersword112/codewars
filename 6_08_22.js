var number=function(array){
    return array ? array.map((item,index)=>{ return `${index+1}: ` + item}) : array = []
   }
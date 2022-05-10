function queueTime(customers, n) {

  let lines = Array(n).fill(0)
  
  customers.forEach(person=>{
    
    let next = lines.indexOf(Math.min(...lines))
    
    lines[next] += person
  })
    
   return Math.max(...lines) 
    
  }
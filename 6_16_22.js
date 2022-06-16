function gap(g, m, n) {
    if(m!=n){
    let results = []
      for (let i = m; i <= n; i++){
        let prime = true
        
        for (let j = 2; j < i && j< 30;j++){
          if (i % j === 0){
             prime =  false
          }
        }
        
        if(prime === true){
          results.push(i)
        }
        
      }
    
    console.log(results)
    
    for(let i = 0; i<= results.length;i++){
      if(results[(i+1)]-results[i] == g){
        return[results[i],results[i+1]]
      }
    }
      return null
    }
    return null
  }
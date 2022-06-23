function productFib(prod){
    //   create fibonacci numbeers
    //   check through list until finding 2 consecutive numbers that multiply to prod
      let n1 = 0, n2 = 1, nextTerm;
      let fibs = []
      for (let i = 0; i<= Math.sqrt(prod);i++){
        fibs.push(n1)
        if (n1*n2 == prod){
          return [n1,n2,true]
        }else if (n1*n2 > prod){
          return [n1,n2,false]
        }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
      }
      return false
    }
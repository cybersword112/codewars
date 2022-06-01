function gimme (triplet) {
    for (let i = 0 ; i < 3; i++){if (i != triplet.indexOf(Math.max(...triplet))  && i != triplet.indexOf(Math.min(...triplet))){return i}}
  
  }
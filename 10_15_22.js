function bingo(ticket, win){
    // instantiate  the miniWin var
      // loop over the ticket
    //   instantiate a miniCount var 
    //   for each combo, loop over the characters codes and compare to the second entry in the array
    //   if code matches increment miniWIn by one
    //   once a win is had for that ticket, continue to next first loop iter
    //   check total miniWin vs win and return winner or loser
      let miniWin = 0
      for(let i = 0 ; i < ticket.length; i ++){
    //     let miniCount = 0
        for(let j = 0; j <ticket[i][0].length; j++){
          if(ticket[i][0].charCodeAt(j) === ticket[i][1]){
            miniWin+=1
            break
          }
        }
      }
      if(miniWin >= win){
        return "Winner!"
      }else{
        return "Loser!"
      }
    }
function winnerString(s1, s2) {
    //coding and coding..
  //   find round length by using math min to find smallest word 
    let roundLength = Math.min(s1.length,s2.length)
  //   declare for each s score
    let s1Score = 0
    let s2Score =0
  //   for l1 compare char position in alphabet for score at each char
  //   closer to a is better except z
  //   leg1:
    let scores = compString(s1,s2,roundLength)
    s1Score += scores[0]
    s2Score+= scores[1]
    let lastScore = scores[2]
  //   for l2 reverse each string and repeat.
    let s1rev = s1.split('').reverse().join('')
    let s2rev = s2.split('').reverse().join('')
    scores = compString(s1rev,s2rev,roundLength)
    s1Score += scores[0]
    s2Score+= scores[1]
    console.log(s1Score,s2Score)
  //   sum score for each leg
  //   total score determines winner
    console.log(s1Score < s2Score ? s1 : s2)
    if(s1Score === s2Score){
      return lastScore === 1 ? s1 : s2
    }else{
      return s1Score < s2Score ? s1 : s2 
    } 
  }
  
  function compString(s1,s2,roundLength){
  //   declare scores
      let s1Score = 0
      let s2Score = 0
      let lastScore;
  //     loop over shortest string length
      for(let i = 0; i < roundLength;i++){
        let s1Char = s1[i]
        let s2Char = s2[i]
        let comp = s1Char.localeCompare(s2Char)
  //       check for z'sjs continue
        if(s1Char === 'z' || s2Char === 'z'){
          s1Char === 'z' ? s1Score++ : s2Score++
          console.log(s1Char,s2Char)
        }
  //       locale compare should return 1 if comapre is higher or -1 if lower, 0 if equal
  //       check result * and against z exception
        else if(comp === 1){
          s1Score++
          if(i === roundLength - 1){
            lastScore = 1
          }
        }else if(comp === -1){
          s2Score++
         if(i === roundLength - 1){
            lastScore = 2
          }
        }
      }
  //   return array with scores
    console.log([s1Score,s2Score, lastScore])
      return [s1Score,s2Score, lastScore]
  }
  
decodeMorse = function(morseCode){
    //   split morsecode into array
    //   map over the aarray and call the dictionary on each itemm
    // afterconvertong to letters,join the array and return
      
      let wordArr = morseCode.split("   ")
      for (let i = 0; i< wordArr.length;i++){
          let letters = wordArr[i].split(" ")
          letters = letters.map((item,ind, arr)=>{
              return MORSE_CODE[String(item)] 
            })
          wordArr[i] = letters.join("")
      } 
     word = wordArr.join(" ").trim()
      return word
    }
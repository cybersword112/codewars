function disemvowel(str) {
    let vowels = ["a","e","i","o","u"]
    for (let i = 0; i < str.length; i++){
      if(vowels.includes(str[i].toLowerCase())){
        str = str.replace(str[i],'')
        i--
      }
    }
    return str;
  }
function encrypt(text, n) {
    if(!text || n<0){return text}
    for(let i = 1; i<= n;i++){
      let even =''
      let odd= ''
      text = text.split('').map((item,index)=>{
        if(index %2 ===0){
          even += item
        }else{
          odd += item
        }
        return item
        }).join('')
      text = odd+even
    }
    console.log(text)
    return text
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || !encryptedText.length || n <= 0)
    {
      return encryptedText;
    }
  
    var first = encryptedText.slice(0, encryptedText.length / 2);
    var second = encryptedText.slice(encryptedText.length / 2);
    
    var res = "";
    var i = 0;
    var j = 0;
  
    while (res.length < encryptedText.length)
    {
      if (res.length % 2 == 0)
      {
        res += second[i];
        i++;
      }
      else
      {
        res += first[j];
        j++;
      }
    }
  
    return decrypt(res, --n);
  }
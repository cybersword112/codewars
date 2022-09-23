String.prototype.camelCase=function(){
    //split the string into an array of words
  //   map over the array and capitalize the first letter of every word
  //   join with '' and return
    if(this != ""){
      let string = this.trim()
      string = string.split(' ')
      return string.map((str,index)=>{
        return str.replace(str[0],str[0].toUpperCase())
      }).join('')
    }
    return ""
  }
function alphabetPosition(text) {
    text = text.split("")
      text = text.filter(item=>item.match(/[a-z]/i))
        text = text.map((item,index,arr)=>{
          item = item.toLowerCase().charCodeAt(0) - 96
          return item
      })
        return text.join(' ')
    }
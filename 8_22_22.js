function cleanString(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
  }
  
  // input will be a string containing letters and spaces along with the backspace function
  // output should be the original string with any chars before a backspace function removed
  
  console.log(cleanString('help#'),'hel')
  console.log(cleanString('#e#lp##'),'he')
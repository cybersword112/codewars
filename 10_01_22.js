function dataReverse(data) {
    let chunks = []
    for(let i = 0 ; i < data.length/8 ;i++){
     let chunk = data.slice(i*8,(i*8)+8)
     chunks.push(chunk)
    }
    chunks = chunks.reverse().flat()
    console.log(chunks)
    return chunks
  }
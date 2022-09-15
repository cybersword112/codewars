function sortMyString(S) {
    // your code here
    let group1 =[]
    let group2 = []
    S.split('').forEach((letter,index)=>{
      if(index === 0 || index % 2 ===0){
        group1.push(letter)
      }else if(index % 2 !==0 && index !== 0){
        group2.push(letter)
      }
    })
    group1 = group1.join('')
    group2 = group2.join('')
    let result = group1 + ' ' + group2
    return result
}

// input is a string s
// output should be a string consisting of two groups from the original string, the odd and even indexes

console.log(sortMyString('inputstring'),'ipttig nusrn')
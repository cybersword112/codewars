function solution(text, letters) {
    // start a count var
    let res = 0;
    text = text.toLowerCase()
    let chars = letters.map(letter=>letter.charCodeAt(0))
    // split text by spacing
    text = text.split(' ')
    //  over each word and check if any characters are not in letters
    for(let i = 0; i<text.length;i++){
        let checkingLetters = text[i].split('')
        let bit = true;
        for(let j = 0; j < checkingLetters.length;j++){
            if( (checkingLetters[j].charCodeAt(0) < 123 && checkingLetters[j].charCodeAt(0) > 96 ) && !chars.includes(checkingLetters[j].charCodeAt(0))){
                bit = false
            }
        }
    //  if true move to next word, if false increment count,
        if(bit){
            res++
        }
    }
    // return count
    return res
    }
    
    // inputs will be letters a list of working chars,
    // and also text, the string we want to determine how many words are typable of
    
    console.log(solution('hey there buddy',['h','e','r','t']),1)
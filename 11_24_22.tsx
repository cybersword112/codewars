// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function removeDupArr(inputStringArr:string[]):string[]{
    //first, map over the input array
    // then split and filter the word
    // for the filter check each letter vs the previous letter
    // if same, do not return letter, if diff, return letter
    // join the array
    // return array
let res = inputStringArr.map((word,index,arr)=>{
    let filteredWord = word.split('').filter((char,index,arr)=>{
        if(index === 0)return true;
        else if(char === arr[index-1]){
            return false
        }else{return true}
    })
    return filteredWord.join('')
})

return res
}



console.log(removeDupArr(["abracadabra","allottee","assessee"]), ["abracadabra","alote","asese"])
console.log(removeDupArr(["kelless","keenness"]), ["keles","kenes"])
console.log(removeDupArr(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]), ['codewars','picaniny','hubububo'])
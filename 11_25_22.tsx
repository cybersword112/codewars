// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function findMissingVowels(sentence:string):number{
    let num:number;
    // interface cache {
    //     a:number,
    //     e:number,
    //     i:number,
    //     o:number,
    //     u:number,

    // }
    // let mem:cache ={a:0,e:0,i:0,o:0,u:0};
    let vowels = ['a','e','i','o','u']
    let found = []
    let charsArr = sentence.split('')
    charsArr.forEach((char,index,arr)=>{
        if(vowels.includes(char)){
            if(!found.includes(char)){
                found.push(char)
            }
        }
    })
    console.log(found)
    vowels.forEach((char,index,arr)=>{
        if(!found.includes(char)){
            num = index
        }
    })
    
    
    return num
}

console.log(findMissingVowels("John Doe hs seven red pples under his bsket"),0)
console.log(findMissingVowels("Bb Smith sent us six neatly arranged range bicycles"),3)
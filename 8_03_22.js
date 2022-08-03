/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    if(strs.length === 1 && strs[0] === "") {
        return ""
    }else{
            //     declare a prefix variable containing the first word and split it
        let prefix = strs[0].split('')
    //     forEach loop over the array of strings
        for(let i = 1; i< strs.length; i++){
            //     split the string and filter the characters that are equal to the same index of the prefix
            let newPrefix =""
            let word = strs[i].split('')
            for(let j = 0; j<word.length;j++){
                if(word[j] == prefix[j]){
                    newPrefix += word[j]
                }else{
                    break
                }
            }
            //     make this the new prefix var.
            prefix =  newPrefix
            //     repeat
        }
    //     return prefix
        return String(prefix)
    }

};

// input will be an array of strings 
// output will be a string (blank if no result) that contains the largest commmon prefix among all the provded strings 
// input strings will only be alphabetical lowercase english lettters
// it cannot be empty, minimum of 1 string

console.log(longestCommonPrefix(["cake","car","castle"]),"ca")
console.log(longestCommonPrefix(["cake","lake","hastle"]),"")
console.log(longestCommonPrefix(["bar","bare","bareface"]),"bar")
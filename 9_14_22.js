/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    //     create a new object
        let groups = {}
        
        for(let i = 0; i<strs.length;i++){
            let count = new Array(26).fill(0)
            let word = strs[i]
            for(let j =0; j<word.length;j++){
                count[word.charCodeAt(j) - 'a'.charCodeAt(0)] += 1
            }
            if(!groups[count]){
                 groups[count] = new Array()
            }
            groups[count].push(word)
        }
        
        let res = Object.values(groups)
        return res
    };
    
    // input will be an array of strings
    // output will be an array of arrays with anagrams grouped by array
    
    
    console.log(groupAnagrams(['hat','cat','tac']),[['hat'],['cat','tac']])
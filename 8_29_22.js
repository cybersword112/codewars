function solution(a) {
    let res=0
    for(let i = 0; i<a.length;i++){
        let num1 = a[i].toString().split('').sort().join('')
        for(let j = 0; j< a.length;j++){
            let num2 = a[j].toString().split('').sort().join('')
            if(num1 == num2 && i < j){
                res++
            }
        }
    }
    return res
}

// input will be an array of ints
// output will be the number of pairs in the array that are digit anagrams

console.log(solution([154,893,613,451,398]),2)
function solution(st) {
    let bit;
    for (let i = st.length;; i++) {
        bit = true;
        for (let j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < st.length && st[j] != st[i - j - 1]) {
            bit = false;
            break;
        }
        }
        if (bit) {
        for (let j = st.length; j < i; j++) {
            st += st[i - j - 1];
        }
        return st;
        }
    }
}

// input will be a string 
// outuput will be the same string with additional chars to complete a palindrome

console.log(solution('rici'),'ricir')
console.log(solution('dkfgh'),'dkfghgfkd')
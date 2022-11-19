function longestPalindrome(s: string): string {
    let currentStr = "", maxStr = "";

    for(let i = 0; i < s.length; i++) {
        let oddString = expand(s, i, i);
        let evenString = expand(s, i, i+1);
        currentStr = oddString.length > evenString.length ? oddString : evenString;    
        maxStr = maxStr.length > currentStr.length ? maxStr : currentStr;
    }
    return maxStr;
}

function expand(s: string, left:number, right: number): string  {
    while(left >= 0 && right <= s.length && s[left] === s[right]) {
        left  -= 1; // make left go outwards;
        right += 1; // make right go outwards;
    }
    return s.substring(left + 1, right); // same principal as including right, but using the left pointer
}


// input will be a string
// output should be the longest substring that fits the rules of a palindrome

console.log(longestPalindrome('catan'),'ata')
console.log(longestPalindrome('tacocat'),'tacocat')

// needs review, from solutions
// approach is to call expand at each character of the string,
// expand starts with adjacent chars and moves otwards both directions and rechecks,
// once the chars are no longer the same , the substring from left to right are returned and used as current str
//current str is then compared to max str and max str reset if current is longer
// after looping the whole string the max str is returned
